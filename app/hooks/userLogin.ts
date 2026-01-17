import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AxiosError } from "axios";
import AuthApi, { type LoginPayload } from "~/api-requests/auth.requests";
import { useAuthStore } from "~/store/useAuthStore";

export const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useAuthStore();

  const handleLogin = async (data: LoginPayload) => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await AuthApi.login(data);
      toast.success(result.message, {
        position: "bottom-right",
      });
      setUser(result.result.userInfo);
      setTimeout(() => navigate("/"), 3000);

      return result;
    } catch (err) {
      const message =
        err instanceof AxiosError
          ? err.response?.data?.message || "Đăng nhập thất bại"
          : "Có lỗi không xác định";
      setError(message);
      toast.error(message, {
        position: "bottom-right",
      });
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, isLoading, error };
};
