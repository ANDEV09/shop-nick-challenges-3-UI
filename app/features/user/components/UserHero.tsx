import { TrendingUp, Wallet } from "lucide-react";

export default function UserHero() {
  const topUsers = [
    {
      rank: 1,
      name: "Hming",
      amount: "5,775,000,000đ",
      color: "bg-yellow-500",
    },
    { rank: 2, name: "Tuanori", amount: "570,000,000đ", color: "bg-gray-400" },
    { rank: 3, name: "Hanngo", amount: "1,000,000đ", color: "bg-amber-600" },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:items-stretch">
      <div className="flex-1">
        <div className="relative rounded-2xl overflow-hidden h-full min-h-70 shadow-md">
          <img
            src="https://meoroblox.com/storage/config/1746807943_47f346a87c0b8825693c5923ed6f81d1.png"
            alt="MEOROBLOX.COM Banner"
            className="w-full h-full max-h-100"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
        </div>
      </div>

      <div className="lg:w-80">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full flex flex-col">
          <div className="bg-black text-white py-3 px-6">
            <div className="flex items-center justify-center gap-2">
              <TrendingUp size={20} />
              <span className="font-bold text-base">TOP 3 NẠP THÁNG 01</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4 p-4">
            <div className="space-y-4">
              {topUsers.map((user) => (
                <div
                  key={user.rank}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 ${user.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {user.rank}
                    </div>
                    <span className="font-medium text-gray-800">
                      {user.name}
                    </span>
                  </div>
                  <span className="text-blue-600 font-semibold">
                    {user.amount}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full bg-linear-to-r from-blue-700 to-blue-900 text-white py-3 rounded-4xl font-bold text-sm hover:bg-blue-700 transition flex items-center justify-center gap-2">
              <Wallet size={16} className="mb-0.5 font-bold" />
              NẠP TIỀN NGAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
