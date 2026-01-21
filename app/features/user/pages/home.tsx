import { useState } from "react";
import { Info, X, Clock } from "lucide-react";
import UserHeader from "~/components/user/UserHeader";
import UserTopBar from "~/components/user/UserTopBar";
import UserHero from "~/features/user/components/UserHero";
import UserFooter from "~/components/user/UserFooter";
import GameCategories from "~/features/user/components/GameCategories";

const FAKE_TRANSACTIONS = [
  {
    user: "LeHung2013",
    action: "vừa mua ACC VIP 1 với giá",
    price: "200,000đ",
  },
  {
    user: "Thanh12345",
    action: "vừa nạp",
    price: "500,000đ",
  },
  {
    user: "Truong27814",
    action: "vừa mua ACC Siêu Cấp với giá",
    price: "350,000đ",
  },
  {
    user: "UserTest",
    action: "vừa nạp",
    price: "100,000đ",
  },
  {
    user: "MinhKiet99",
    action: "vừa mua ACC Thường với giá",
    price: "80,000đ",
  },
  {
    user: "BaoTran2024",
    action: "vừa nạp",
    price: "1,000,000đ",
  },
  {
    user: "NgocAnhVIP",
    action: "vừa mua ACC VIP 2 với giá",
    price: "400,000đ",
  },
  {
    user: "TestUser88",
    action: "vừa nạp",
    price: "250,000đ",
  },
];

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      <UserTopBar />
      <UserHeader />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <UserHero />

        {showBanner && (
          <div className="mt-6 bg-green-50 border-l-4 border-green-400 rounded-lg p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Info size={16} className="text-green-700 mb-0.5" />
              <p className="text-green-700 font-medium text-sm">
                Chào mừng bạn đến với Shop Bán Acc Game của chúng tôi. Nạp
                ATM/Momo khuyến mãi 10%, Nạp thẻ cào nhận 100% giá trị thẻ nạp
                !!
              </p>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
        )}

        <div className="mt-6 bg-white rounded-2xl shadow-md p-4">
          <div className="flex flex-col gap-0.5 mb-2">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-blue-600 mb-1" />
              <h2 className="text-blue-600 font-bold text-base">
                Giao Dịch Gần Đây
              </h2>
            </div>
            <div className="w-full h-px bg-gray-100 mt-1" />
          </div>
          <div className="overflow-x-hidden w-full">
            <div className="whitespace-nowrap animate-marquee font-semibold text-sm">
              {FAKE_TRANSACTIONS.map((item, idx) => (
                <span key={idx} className="inline-block mx-2 gap-2">
                  <span className="text-blue-700">
                    {item.user.slice(0, 5) + "*".repeat(item.user.length - 5)}
                  </span>{" "}
                  <span className="text-black font-normal text-xs">
                    {item.action}
                  </span>{" "}
                  <span className="text-blue-700">{item.price}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <GameCategories />
        </div>
      </main>
      <UserFooter />
    </div>
  );
}
