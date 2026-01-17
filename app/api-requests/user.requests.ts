import { AUTH_ENDPOINTS } from "@/constants/api.constants";
import { privateApi, publicApi } from "@/lib/axios-instance";

const UserApi = {
    getCurrentUser: async () => {
        const response = await privateApi.get(AUTH_ENDPOINTS.ME);
        return response.data;
    },

    forgotPassword: async (email: string): Promise<{ message: string }> => {
        const response = await publicApi.post<{ message: string }>(
            AUTH_ENDPOINTS.FORGOT_PASSWORD,
            { email }
        );
        return response.data;
    },

    resetPassword: async (token: string, newPassword: string): Promise<{ message: string }> => {
        const response = await publicApi.post<{ message: string }>(
            AUTH_ENDPOINTS.RESET_PASSWORD,
            { token, new_password: newPassword }
        );
        return response.data;
    },
}

export default UserApi;