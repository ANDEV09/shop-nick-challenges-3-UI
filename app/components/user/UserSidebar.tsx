import {
  CreditCard,
  HandCoins,
  History,
  Landmark,
  ShoppingBag,
  User,
} from "lucide-react";
import { useState } from "react";

export default function UserSidebar() {
  const [activeMenu, setActiveMenu] = useState("account-info");
  return (
    <div className="w-72 bg-white shadow-md">
      <div>
        <h2 className="bg-gray-200 text-blue-600 font-bold p-3 text-sm border-b-2 border-blue-500">
          MENU TÀI KHOẢN
        </h2>
        <div>
          <button
            onClick={() => setActiveMenu("account-info")}
            className={`w-full text-left px-4 py-3 border-b transition-colors flex items-center gap-2 text-sm ${
              activeMenu === "account-info"
                ? "bg-blue-600 text-white font-semibold"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            <User strokeWidth={2} className="mb-1" size={20} />
            <span className="font-semibold">Thông tin tài khoản</span>
          </button>

          <button
            onClick={() => setActiveMenu("card-topup")}
            className={`w-full text-left px-4 py-3 border-b transition-colors flex items-center gap-2 text-sm ${
              activeMenu === "card-topup"
                ? "bg-blue-600 text-white font-semibold"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            <CreditCard strokeWidth={2} className="mb-0.5" size={20} />
            <span className="font-semibold">Nạp tiền thẻ cào</span>
          </button>

          <button
            onClick={() => setActiveMenu("atm-topup")}
            className={`w-full text-left px-4 py-3 border-b transition-colors flex items-center gap-2 text-sm ${
              activeMenu === "atm-topup"
                ? "bg-blue-600 text-white font-semibold"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Landmark strokeWidth={2} className="mb-1" size={20} />
            <span className="font-semibold">Nạp tiền ATM</span>
          </button>

          <button
            onClick={() => setActiveMenu("balance-history")}
            className={`w-full text-left px-4 py-3 border-b transition-colors flex items-center gap-2 text-sm ${
              activeMenu === "balance-history"
                ? "bg-blue-600 text-white font-semibold"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            <HandCoins strokeWidth={2} className="mb-1" size={20} />
            <span className="font-semibold">Biến động số dư</span>
          </button>
        </div>
      </div>

      <div className="mt-0">
        <h2 className="bg-gray-200 text-blue-600 font-bold p-3 text-sm border-t-4 border-blue-600">
          MENU GIAO DỊCH
        </h2>
        <div>
          <button
            onClick={() => setActiveMenu("account-purchased")}
            className={`w-full text-left px-4 py-3 border-b transition-colors flex items-center gap-2 text-sm ${
              activeMenu === "account-purchased"
                ? "bg-blue-600 text-white font-semibold"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ShoppingBag strokeWidth={2} className="mb-1" size={20} />
            <span className="font-semibold">Tài khoản đã mua</span>
          </button>

          <button
            onClick={() => setActiveMenu("wheel-history")}
            className={`w-full text-left px-4 py-3 border-b transition-colors flex items-center gap-2 text-sm ${
              activeMenu === "wheel-history"
                ? "bg-blue-600 text-white font-semibold"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            <History strokeWidth={2} className="mb-1" size={20} />
            <span className="font-semibold">Lịch sử vòng quay</span>
          </button>
        </div>
      </div>
    </div>
  );
}
