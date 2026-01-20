import {
  Calendar,
  CircleUserRound,
  CreditCard,
  KeyRound,
  MailPlus,
  ShieldUser,
  SquareStar,
  Wallet,
  WalletCards,
} from "lucide-react";
import { useAuthStore } from "~/store/useAuthStore";
import { formatDateTime } from "~/lib/utils";

export default function ProfileInfo() {
  const { authUser } = useAuthStore();

  return (
    <>
      <div className="border-b-3 border-blue-600 pb-3 mb-6 bg-gray-50 pt-3 px-4 rounded-t-md">
        <h2 className="text-base font-bold text-blue-600 flex items-center gap-2 ">
          <Wallet className="mb-1" size={18} />
          THÔNG TIN TÀI KHOẢN
        </h2>
      </div>
      <div className="space-y-0 m-4">
        <div className="flex items-center gap-4 py-2 border-b transition-transform duration-300 hover:translate-x-2 hover:scale-98 cursor-pointer">
          <span className="flex items-center gap-1 text-gray-700 font-semibold text-sm min-w-45">
            <ShieldUser strokeWidth={2} className="mb-1" size={20} />
            Tên đăng nhập
          </span>
          <span className="text-gray-900 font-medium">
            {authUser?.username ?? "—"}
          </span>
        </div>

        <div className="flex items-center gap-4 py-4 border-b transition-transform duration-300 hover:translate-x-2 hover:scale-98 cursor-pointer">
          <span className="flex items-center gap-1 text-gray-700 font-semibold text-sm min-w-45">
            <MailPlus strokeWidth={2} className="mb-1" size={20} />
            Email
          </span>
          <span className="text-gray-900 font-medium">
            {authUser?.email ?? "—"}
          </span>
        </div>
        <div className="flex items-center gap-4 py-4 border-b transition-transform duration-300 hover:translate-x-2 hover:scale-98 cursor-pointer">
          <span className="flex items-center gap-1 text-gray-700 font-semibold text-sm min-w-45">
            <SquareStar strokeWidth={2} className="mb-1" size={20} />
            Role
          </span>
          <span className="text-gray-900 font-medium">
            {authUser?.role ?? "—"}
          </span>
        </div>

        <div className="flex items-center gap-4 py-4 border-b transition-transform duration-300 hover:translate-x-2 hover:scale-98 cursor-pointer">
          <span className="flex items-center gap-1 text-gray-700 font-semibold text-sm min-w-45">
            <KeyRound strokeWidth={2} className="mb-1" size={20} />
            Mật khẩu
          </span>
          <span className="text-gray-900 font-medium">********</span>
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm font-semibold flex items-center gap-1"
          >
            Đổi mật khẩu
          </a>
        </div>
        <div className="flex items-center gap-4 py-4 border-b transition-transform duration-300 hover:translate-x-2 hover:scale-98 cursor-pointer">
          <span className="flex items-center gap-1 text-gray-700 font-semibold text-sm min-w-45">
            <CreditCard strokeWidth={2} className="mb-1" size={20} />
            Số dư
          </span>
          <span className="text-gray-900 font-medium">
            {(authUser?.balance ?? 0).toLocaleString()} VND
          </span>
        </div>
        <div className="flex items-center gap-4 py-4 border-b transition-transform duration-300 hover:translate-x-2 hover:scale-98 cursor-pointer">
          <span className="flex items-center gap-1 text-gray-700 font-semibold text-sm min-w-45">
            <WalletCards strokeWidth={2} className="mb-1" size={20} />
            Tổng nạp
          </span>
          <span className="text-gray-900 font-medium">
            {(authUser?.totalDeposited ?? 0).toLocaleString()} VND
          </span>
        </div>
        <div className="flex items-center gap-4 py-4 transition-transform duration-300 hover:translate-x-2 hover:scale-98 cursor-pointer">
          <span className="flex items-center gap-1 text-gray-700 font-semibold text-sm min-w-45">
            <Calendar strokeWidth={2} className="mb-1" size={20} />
            Ngày tạo
          </span>
          <span className="text-gray-900 font-medium">
            {formatDateTime(authUser?.createdAt)}
          </span>
        </div>
      </div>
    </>
  );
}
