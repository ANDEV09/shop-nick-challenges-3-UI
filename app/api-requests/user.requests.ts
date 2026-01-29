import { AUTH_ENDPOINTS, USER_ENDPOINTS } from "~/constants/api.constants";
import { privateApi, publicApi } from "~/lib/axios-instance";

const UserApi = {
  getCurrentUser: async () => {
    const response = await privateApi.get(AUTH_ENDPOINTS.ME);
    return response.data;
  },

  forgotPassword: async (email: string): Promise<{ message: string }> => {
    const response = await publicApi.post<{ message: string }>(
      AUTH_ENDPOINTS.FORGOT_PASSWORD,
      { email },
    );
    return response.data;
  },

  resetPassword: async (
    token: string,
    newPassword: string,
  ): Promise<{ message: string }> => {
    const response = await publicApi.post<{ message: string }>(
      AUTH_ENDPOINTS.RESET_PASSWORD,
      { token, new_password: newPassword },
    );
    return response.data;
  },

  getUserDepositHistories: async (userId: string) => {
    const res = await privateApi.get(
      USER_ENDPOINTS.GET_DEPOSIT_HISTORIES(userId),
    );
    return (res.data.data || []).map((item: any) => ({
      id: item.id,
      amount: item.amount ?? 0,
      balanceBefore: item.balanceBefore ?? 0,
      balanceAfter: item.balanceAfter ?? 0,
      createdAt: item.createdAt,
      status: "Thành công",
    }));
  },
};

export type {
  UserResponse,
  PasswordResetResponse,
  ForgotPasswordResponse,
} from "~/types/user.types";

export default UserApi;
