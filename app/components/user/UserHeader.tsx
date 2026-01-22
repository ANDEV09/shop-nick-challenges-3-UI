import { User, Key } from "lucide-react";
import { Link } from "react-router";
import AuthApi from "~/api-requests/auth.requests";
import { useAuthStore } from "~/store/useAuthStore";
import { useEffect } from "react";

export default function UserHeader() {
  const { isAuthenticated, authUser, setUser } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      AuthApi.getMe()
        .then((user) => setUser(user.result))
        .catch(() => {});
    }
  }, [isAuthenticated]);

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
          <ul className="flex items-center gap-7">
            <li>
              <Link
                to="/"
                className="relative pb-1 font-bold text-sm text-blue-600 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-600"
              >
                TRANG CHỦ
              </Link>
            </li>

            <li>
              <a className="relative pb-1 font-bold text-sm text-gray-800 hover:text-blue-600 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
                NẠP TIỀN
              </a>
            </li>

            <li>
              <a className="relative pb-1 font-bold text-sm text-gray-800 hover:text-blue-600 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">
                LIÊN HỆ ADMIN
              </a>
            </li>

            {isAuthenticated && (
              <li>
                <Link
                  to="/staff"
                  className="relative pb-1 font-bold text-sm text-gray-800 hover:text-blue-600 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  ĐĂNG BÁN NICK
                </Link>
              </li>
            )}

            {isAuthenticated && authUser?.role === "ADMIN" && (
              <li>
                <Link
                  to="/admin"
                  className="relative pb-1 font-bold text-sm text-gray-800 hover:text-blue-600"
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
                className="font-bold text-sm hover:text-blue-600 "
              >
                {authUser ? (
                  <>
                    {authUser.username} –{" "}
                    {Number(authUser.balance || 0).toLocaleString("vi-VN")}đ
                  </>
                ) : (
                  "Tài khoản"
                )}
              </Link>

              <button
                onClick={handleLogout}
                className="px-3 py-2 text-xs font-semibold rounded-md bg-linear-to-r from-blue-700 to-blue-900 text-white flex items-center gap-2 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none cursor-pointer"
              >
                ĐĂNG XUẤT
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
