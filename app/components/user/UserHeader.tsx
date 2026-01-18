import { User, Key } from "lucide-react";
import { Link } from "react-router";
import AuthApi from "~/api-requests/auth.requests";
import { useAuthStore } from "~/store/useAuthStore";

export default function UserHeader() {
  const { isAuthenticated, authUser } = useAuthStore();

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
                className="relative pb-1 font-semibold transition-colors text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 after:w-full"
              >
                TRANG CHỦ
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="relative pb-1 font-semibold transition-colors text-gray-800 hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 after:w-0 hover:after:w-full"
              >
                NẠP TIỀN
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative pb-1 font-semibold transition-colors text-gray-800 hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 after:w-0 hover:after:w-full"
              >
                LIÊN HỆ ADMIN
              </a>
            </li>
            {isAuthenticated && (
              <li>
                <Link
                  to="/staff"
                  className="relative pb-1 font-semibold transition-colors text-gray-800 hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                >
                  ĐĂNG BÁN TÀI KHOẢN
                </Link>
              </li>
            )}
            {isAuthenticated && authUser?.role === "ADMIN" && (
              <li>
                <Link
                  to="/admin"
                  className="relative pb-1 font-bold transition-colors text-gray-800 hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                >
                  ADMIN PANNEL
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="font-semibold text-sm">
                {authUser?.username} - {authUser?.balance.toLocaleString()}đ
              </span>
              <button
                onClick={() => {
                  useAuthStore.getState().setUser(null);
                  AuthApi.logout();
                }}
                className="flex items-center font-semibold gap-2 px-3 py-1.5 text-sm border border-red-600 rounded-md bg-red-700 text-white transition"
              >
                <User size={14} className="mb-1" /> ĐĂNG XUẤT
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 border border-blue-600 rounded-md hover:bg-blue-700 hover:text-white transition"
              >
                <User size={16} className="mb-1" />
                <span className="font-semibold text-sm ">ĐĂNG NHẬP</span>
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                <Key size={16} className="mb-1" />
                <span className="font-semibold text-sm">ĐĂNG KÝ</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
