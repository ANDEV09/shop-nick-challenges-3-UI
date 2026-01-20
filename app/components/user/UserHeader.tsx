import { User, Key } from "lucide-react";
import { Link } from "react-router";
import AuthApi from "~/api-requests/auth.requests";
import { useAuthStore } from "~/store/useAuthStore";

export default function UserHeader() {
  const { isAuthenticated, authUser, setUser } = useAuthStore();

  const handleLogout = async () => {
    try {
      await AuthApi.logout();
    } finally {
      setUser(null);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://meoroblox.com/storage/config/1746807379_d93b987255372da1b9eb977de51f7550.png"
            className="h-10"
            alt="MEOROBLOX.COM Logo"
          />
        </div>

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                to="/"
                className="relative pb-1 font-semibold text-blue-600 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-600"
              >
                TRANG CHỦ
              </Link>
            </li>

            <li>
              <a className="relative pb-1 font-semibold text-gray-800 hover:text-blue-600">
                NẠP TIỀN
              </a>
            </li>

            <li>
              <a className="relative pb-1 font-semibold text-gray-800 hover:text-blue-600">
                LIÊN HỆ ADMIN
              </a>
            </li>

            {isAuthenticated && (
              <li>
                <Link
                  to="/staff"
                  className="relative pb-1 font-semibold text-gray-800 hover:text-blue-600"
                >
                  ĐĂNG BÁN TÀI KHOẢN
                </Link>
              </li>
            )}

            {isAuthenticated && authUser?.role === "ADMIN" && (
              <li>
                <Link
                  to="/admin"
                  className="relative pb-1 font-bold text-gray-800 hover:text-blue-600"
                >
                  ADMIN PANEL
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Link
                to="/profile/profile-info"
                className="font-semibold text-sm hover:text-blue-600"
              >
                {authUser?.username} –{" "}
                {(Number(authUser?.balance) || 0).toLocaleString("vi-VN")}đ
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold border border-red-600 rounded-md bg-red-700 text-white"
              >
                <User size={14} /> ĐĂNG XUẤT
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 border border-blue-600 rounded-md hover:bg-blue-700 hover:text-white"
              >
                <User size={16} />
                <span className="font-semibold text-sm">ĐĂNG NHẬP</span>
              </Link>

              <Link
                to="/register"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Key size={16} />
                <span className="font-semibold text-sm">ĐĂNG KÝ</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
