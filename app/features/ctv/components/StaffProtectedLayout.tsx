import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CookieStorage from "~/lib/cookie-storage";
import { showErrorToast } from "~/lib/utils";
import { useAuthStore } from "~/store/useAuthStore";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const accessToken = CookieStorage.getItem("access_token");
    const refreshToken = CookieStorage.getItem("refresh_token");
    if (!accessToken || !refreshToken) {
      showErrorToast("Quyền truy cập không hợp lệ.");
      CookieStorage.clearAuth();
      setUser(null);
      navigate("/login", { replace: true });
    }
  }, [navigate, setUser]);

  return <>{children}</>;
}
