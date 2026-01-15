import { useState } from "react";
import { Info, X, Clock } from "lucide-react";
import UserHeader from "~/features/user/components/UserHeader";
import UserTopBar from "~/features/user/components/UserTopBar";
import UserHero from "~/features/user/components/UserHero";
import UserFooter from "~/features/user/components/UserFooter";

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);
  const products = [
    {
      id: 1,
      image:
        "https://meoroblox.com/storage/random-categories/1767542083_8573e8c352db4cf28563fc00c30db9f5.gif",
      title: "ACC BLOX FRUITS TỰ CHỌN",
      accounts: 5,
      sold: 4,
    },
    {
      id: 2,
      image:
        "https://meoroblox.com/storage/random-categories/1767365246_d636a126db9356f11df08579bbadab58.gif",
      title: "ACC V4 FULL GEAR TỰ CHỌN",
      accounts: 65,
      sold: 52,
    },
    {
      id: 3,
      image:
        "https://meoroblox.com/storage/random-categories/1767365238_f7b2f93b67f5ecd280cacf19ab2755a5.gif",
      title: "ACC DRACO V4 FULL GEAR",
      accounts: 17,
      sold: 13,
    },
    {
      id: 4,
      image:
        "https://meoroblox.com/storage/random-categories/1746809690_eddaff3ee9c17ae8eb17d57c49a92c20.gif",
      title: "ACCOUNT DRAGON RƯƠNG",
      accounts: 2,
      sold: 2,
    },
    {
      id: 5,
      image:
        "https://meoroblox.com/storage/random-categories/1746809690_eddaff3ee9c17ae8eb17d57c49a92c20.gif",
      title: "ACCOUNT YETI RƯƠNG",
      accounts: 10,
      sold: 10,
    },
    {
      id: 6,
      image:
        "https://meoroblox.com/storage/random-categories/1746809654_9a54e48bdcccf4772287b2977aabe3d0.gif",
      title: "ACCOUNT GAS RƯƠNG",
      accounts: 8,
      sold: 8,
    },
    {
      id: 7,
      image:
        "https://meoroblox.com/storage/random-categories/1746809634_c5d5a912608e396b23cef1c5f79f9d46.gif",
      title: "ACCOUNT KITSUNE RƯƠNG",
      accounts: 22,
      sold: 18,
    },
    {
      id: 8,
      image:
        "https://meoroblox.com/storage/random-categories/1746809569_fd2ff020402dfedf2867c98069cc93e3.gif",
      title: "ACCOUNT TIGER RƯƠNG",
      accounts: 17,
      sold: 15,
    },
  ];

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

        <div className="text-center mb-8 mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] uppercase mb-2">
            Tài Khoản Game
          </h2>
          <div className="w-16 h-1 bg-[#1e3a5f] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-44 object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-bold text-[#1e3a5f] text-center mb-3 uppercase">
                  {product.title}
                </h3>

                <div className="flex justify-center gap-2 mb-4">
                  <span className="bg-[#2563eb] text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    {product.accounts} tài khoản
                  </span>
                  <span className="bg-[#2563eb] text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    Đã bán: {product.sold}
                  </span>
                </div>

                <button className="w-full border-2 border-[#2563eb] text-[#2563eb] font-semibold py-2 rounded-full hover:bg-[#2563eb] hover:text-white transition-colors uppercase text-sm">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <UserFooter />
    </div>
  );
}
