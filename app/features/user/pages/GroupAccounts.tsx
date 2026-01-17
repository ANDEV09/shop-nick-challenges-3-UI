import UserHeader from "~/components/user/UserHeader";
import UserTopBar from "~/components/user/UserTopBar";
import AccountsFilter from "~/features/user/components/AccountsFilter";
import { formatCurrency } from "~/lib/utils";

export default function Accounts() {
  const accounts = [
    {
      id: 138,
      image:
        "https://meoroblox.com/storage/accounts/thumbnails/1766661370_a19ddbe22afc139c538bfca41cea40ad.png",
      price: 180000,
      cardPrice: 160000,
    },
    {
      id: 138,
      image:
        "https://meoroblox.com/storage/accounts/thumbnails/1766661370_a19ddbe22afc139c538bfca41cea40ad.png",
      price: 180000,
      cardPrice: 160000,
    },
    {
      id: 138,
      image:
        "https://meoroblox.com/storage/accounts/thumbnails/1766661370_a19ddbe22afc139c538bfca41cea40ad.png",
      price: 180000,
      cardPrice: 160000,
    },
    {
      id: 138,
      image:
        "https://meoroblox.com/storage/accounts/thumbnails/1766661370_a19ddbe22afc139c538bfca41cea40ad.png",
      price: 180000,
      cardPrice: 160000,
    },
  ];

  return (
    <>
      <UserTopBar />
      <UserHeader />

      <div className="min-h-screen bg-gray-100">
        <div className="w-full bg-blue-800 text-white py-6 px-4">
          <h1 className="text-3xl font-bold text-center">
            Acc Blox Fruits Tự chọn
          </h1>
          <p className="text-center text-blue-100 text-sm mt-1">
            Acc blox fruits 100% như hình Giá tự chọn
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <AccountsFilter />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
            {accounts.map((account, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative bg-gray-200 h-48 overflow-hidden">
                  <img
                    src={account.image || "/placeholder.svg"}
                    alt={`Account ${account.id}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    Mã số: {account.id}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors text-xs">
                      {formatCurrency(account.cardPrice)}
                    </button>
                    <button className="flex-1 px-3 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50 transition-colors text-xs">
                      XEM CHI TIẾT
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
