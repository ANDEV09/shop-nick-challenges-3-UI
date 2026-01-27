import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showErrorToast } from "~/lib/utils";
import CookieStorage from "~/lib/cookie-storage";
import { useAuthStore } from "~/store/useAuthStore";
import AuthApi from "~/api-requests/auth.requests";

export default function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const authUser = useAuthStore((state) => state.authUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = CookieStorage.getItem("access_token");
      const refreshToken = CookieStorage.getItem("refresh_token");
      if (!accessToken || !refreshToken) {
        showErrorToast("Quyền truy cập không hợp lệ.");
        CookieStorage.clearAuth();
        setUser(null);
        navigate("/login", { replace: true });
        return;
      }
      try {
        if (!authUser) {
          const userRes = await AuthApi.getMe();
          setUser(userRes.result);
          if (userRes.result.role?.toLowerCase() !== "admin") {
            showErrorToast("Bạn không có quyền truy cập trang này.");
            navigate("/", { replace: true });
            return;
          }
        } else if (authUser.role?.toLowerCase() !== "admin") {
          showErrorToast("Bạn không có quyền truy cập trang này.");
          navigate("/", { replace: true });
          return;
        }
      } catch (err) {
        showErrorToast("Không xác thực được người dùng.");
        CookieStorage.clearAuth();
        setUser(null);
        navigate("/login", { replace: true });
        return;
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) return null;
  return <>{children}</>;
}
