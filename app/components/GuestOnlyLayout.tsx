import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showErrorToast } from "~/lib/utils";
import { useAuthStore } from "~/store/useAuthStore";

export default function GuestOnlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return <>{children}</>;
}
