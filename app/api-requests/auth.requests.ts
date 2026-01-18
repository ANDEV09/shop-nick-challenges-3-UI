import { privateApi, publicApi } from "~/lib/axios-instance";
import { AUTH_ENDPOINTS } from "~/constants/api.constants";
import CookieStorage from "~/lib/cookie-storage";
import type { A } from "node_modules/react-router/dist/development/router-5iOvts3c.mjs";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface RegisterResponse {
  message: string;
}

export interface UserInfoResponse {
  id: string;
  username: string;
  email: string;
  balance: number;
  role: string;
}
export interface LoginResponse {
  message: string;
  result: {
    userInfo: UserInfoResponse;
    access_token: string;
    refresh_token: string;
  };
}

export interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
}

const AuthApi = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    const response = await publicApi.post<LoginResponse>(
      AUTH_ENDPOINTS.LOGIN,
      payload,
    );

    CookieStorage.setItem("access_token", response.data.result.access_token, {
      expires: 1,
    });
    CookieStorage.setItem("refresh_token", response.data.result.refresh_token, {
      expires: 7,
    });

    return response.data;
  },

  register: async (payload: RegisterPayload): Promise<RegisterResponse> => {
    const response = await publicApi.post<RegisterResponse>(
      AUTH_ENDPOINTS.REGISTER,
      payload,
    );
    return response.data;
  },

  /**
   * Refresh token
   */
  refreshToken: async (): Promise<RefreshTokenResponse> => {
    const refreshToken = CookieStorage.getItem("refresh_token");
    if (!refreshToken) throw new Error("No refresh token available");

    const response = await publicApi.post<RefreshTokenResponse>(
      AUTH_ENDPOINTS.REFRESH_TOKEN,
      { refresh_token: refreshToken },
    );

    CookieStorage.setItem("access_token", response.data.access_token, {
      expires: 1,
    });
    CookieStorage.setItem("refresh_token", response.data.refresh_token, {
      expires: 7,
    });
    return response.data;
  },

  logout: async (): Promise<void> => {
    try {
      await privateApi.post(AUTH_ENDPOINTS.LOGOUT);
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      CookieStorage.clearAuth();
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
  },
};

export default AuthApi;
