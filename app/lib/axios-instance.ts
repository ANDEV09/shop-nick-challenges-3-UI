import axios, {
    AxiosError,
    AxiosResponse,
    type InternalAxiosRequestConfig
} from 'axios';

import CookieStorage from './cookie-storage';
import AuthApi from '@/api-requests/auth.requests';
import { API_OPTIONS } from '@/constants/api.options';

export const publicApi = axios.create(API_OPTIONS);

export const privateApi = axios.create({
    ...API_OPTIONS,
});

privateApi.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = CookieStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error: AxiosError) => Promise.reject(error)
);

let isRefreshing = false;
let refreshQueue: Array<{
    resolve: () => void;
    reject: (err: unknown) => void;
}> = [];

const processQueue = (error?: unknown) => {
    refreshQueue.forEach((promise) =>
        error ? promise.reject(error) : promise.resolve()
    );
    refreshQueue = [];
};

privateApi.interceptors.response.use(
    (response: AxiosResponse) => response,

    async (error: AxiosError) => {
        if (error instanceof AxiosError) {
            const originalRequest:
                | (InternalAxiosRequestConfig & {
                    _retry?: boolean;
                })
                | undefined = error.config;

            if (
                error.response?.status === 401 &&
                originalRequest &&
                !originalRequest._retry &&
                !originalRequest.url?.includes('/auth/refresh')
            ) {
                if (isRefreshing) {
                    return new Promise((resolve, reject) => {
                        refreshQueue.push({
                            resolve: () => {
                                resolve(privateApi(originalRequest));
                            },
                            reject,
                        });
                    });
                }

                isRefreshing = true;
                originalRequest._retry = true;

                try {
                    await AuthApi.refreshToken();
                    processQueue();

                    return privateApi(originalRequest);

                } catch (refreshError) {
                    processQueue(refreshError);
                    CookieStorage.clearAuth();

                    if (typeof window !== 'undefined') {
                        window.location.href = '/login';
                    }

                    return Promise.reject(refreshError);
                } finally {
                    isRefreshing = false;
                }
            }

            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);