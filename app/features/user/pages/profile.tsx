import UserFooter from "~/components/user/UserFooter";
import UserHeader from "~/components/user/UserHeader";
import UserTopBar from "~/components/user/UserTopBar";
import UserSidebar from "~/components/user/UserSidebar";
import {
  Calendar,
  CircleUserRound,
  CreditCard,
  KeyRound,
  MailPlus,
  ShieldUser,
  Wallet,
  WalletCards,
} from "lucide-react";

export default function profile() {
  const accountData = {
    username: "takerynnaru",
    email: "takerynnaru@gmail.com",
    password: "*******",
    balance: "0 VND",
    totalDeposit: "0 VND",
    robux: "1,000,000,200",
    createdDate: "23:42 08/05/2025",
  };

  return (
    <div>
      <UserTopBar />
      <UserHeader />
      <div className="max-w-7xl  mx-auto px-4 mt-8">
        <div className="bg-blue-600 text-white p-4 mx-auto mt-4 rounded-t-md">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <CircleUserRound strokeWidth={2} className="mb-1" />
            THÔNG TIN TÀI KHOẢN
          </h1>
        </div>

        <div className="flex gap-0 mx-auto mb-8 max-w-7xl">
          <UserSidebar />
          <div className="flex-1 bg-white p-8 shadow-md rounded-t-md">
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
                  {accountData.username}
                </span>
              </div>

              <div className="flex items-center gap-4 py-4 border-b transition-transform duration-300 hover:translate-x-2 hover:scale-98 cursor-pointer">
                <span className="flex items-center gap-1 text-gray-700 font-semibold text-sm min-w-45">
                  <MailPlus strokeWidth={2} className="mb-1" size={20} />
                  Email
                </span>
                <span className="text-gray-900 font-medium">
                  {accountData.email}
                </span>
              </div>

              <div className="flex items-center gap-4 py-4 border-b transition-transform duration-300 hover:translate-x-2 hover:scale-98 cursor-pointer">
                <span className="flex items-center gap-1 text-gray-700 font-semibold text-sm min-w-45">
                  <KeyRound strokeWidth={2} className="mb-1" size={20} />
                  Mật khẩu
                </span>
                <span className="text-gray-900 font-medium">
                  {accountData.password}
                </span>
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
                  {accountData.balance}
                </span>
              </div>
              <div className="flex items-center gap-4 py-4 border-b transition-transform duration-300 hover:translate-x-2 hover:scale-98 cursor-pointer">
                <span className="flex items-center gap-1 text-gray-700 font-semibold text-sm min-w-45">
                  <WalletCards strokeWidth={2} className="mb-1" size={20} />
                  Tổng nạp
                </span>
                <span className="text-gray-900 font-medium">
                  {accountData.totalDeposit}
                </span>
              </div>
              <div className="flex items-center gap-4 py-4 transition-transform duration-300 hover:translate-x-2 hover:scale-98 cursor-pointer">
                <span className="flex items-center gap-1 text-gray-700 font-semibold text-sm min-w-45">
                  <Calendar strokeWidth={2} className="mb-1" size={20} />
                  Ngày tạo
                </span>
                <span className="text-gray-900 font-medium">
                  {accountData.createdDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserFooter />
    </div>
  );
}
