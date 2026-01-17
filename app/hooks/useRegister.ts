import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AxiosError } from "axios";
import AuthApi, { type RegisterPayload } from "~/api-requests/auth.requests";

export const useRegister = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (data: RegisterPayload) => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await AuthApi.register(data);
      console.log("Register result:", result);
      toast.success(result.message, {
        position: "bottom-right",
      });
      setTimeout(() => navigate("/login"), 3000);

      return result;
    } catch (err) {
      const message =
        err instanceof AxiosError
          ? err.response?.data?.message || "Đăng ký thất bại"
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

  return { handleRegister, isLoading, error };
};
