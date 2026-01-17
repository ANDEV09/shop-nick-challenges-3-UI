import { useState } from "react";
import { Info, X, Clock } from "lucide-react";
import UserHeader from "~/components/user/UserHeader";
import UserTopBar from "~/components/user/UserTopBar";
import UserHero from "~/features/user/components/UserHero";
import UserFooter from "~/components/user/UserFooter";
import GameCategories from "~/features/user/components/GameCategories";

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
              <p className="text-green-700 font-medium">
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

        <div className="mt-6 bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={20} className="text-blue-600 mb-1" />
            <h2 className="text-blue-600 font-bold text-lg">
              Giao Dịch Gần Đây
            </h2>
          </div>
          <div className="space-y-3">
            <p className="text-gray-600">
              Dữ liệu giao dịch đang được cập nhật...
            </p>
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
