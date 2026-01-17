import { privateApi, publicApi } from "~/lib/axios-instance";
import { AUTH_ENDPOINTS } from "~/constants/api.constants";
import CookieStorage from "~/lib/cookie-storage";

export interface LoginPayload {
  email: string;
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

export interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
}

const AuthApi = {
  // login: async (payload: LoginPayload): Promise<RegisterResponse> => {
  //   const response = await publicApi.post<RegisterResponse>(
  //     AUTH_ENDPOINTS.LOGIN,
  //     payload,
  //   );

  //   CookieStorage.setItem("access_token", response.data.access_token, {
  //     expires: 1,
  //   });
  //   CookieStorage.setItem("refresh_token", response.data.refresh_token, {
  //     expires: 7,
  //   });

  //   return response.data;
  // },

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
