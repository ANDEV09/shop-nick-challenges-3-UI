import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import UserHeader from "~/components/user/UserHeader";
import UserTopBar from "~/components/user/UserTopBar";
import AccountsFilter from "~/features/user/components/AccountsFilter";
import { formatCurrency, showErrorToast } from "~/lib/utils";
import AccountsApi, {
  type GameAccount,
} from "~/api-requests/Accounts.requests";
import UserFooters from "~/components/user/UserFooter";

export default function Accounts() {
  const { groupId } = useParams<{ groupId: string }>();
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState<GameAccount[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 8;

  useEffect(() => {
    const fetchAccounts = async () => {
      if (!groupId) return;
      setIsLoading(true);
      try {
        const data = await AccountsApi.getAccountsByGroup(groupId, page, limit);
        setAccounts(data);
      } catch (error) {
        showErrorToast("Không thể tải danh sách tài khoản");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAccounts();
  }, [groupId, page]);

  const [priceFilter, setPriceFilter] = useState("all");

  const handleFilter = (newPriceFilter: string) => {
    setPriceFilter(newPriceFilter);
  };

  const priceRanges: Record<string, [number, number]> = {
    low: [0, 100000],
    medium: [100000, 500000],
    high: [500000, 10000000],
    max: [10000000, Infinity],
  };

  const filteredAccounts = accounts.filter((acc) => {
    if (priceFilter !== "all") {
      const [min, max] = priceRanges[priceFilter];
      if (acc.price < min || acc.price > max) return false;
    }
    return true;
  });

  return (
    <div className="bg-gray-100">
      <UserTopBar />
      <UserHeader />

      <div className="min-h-screen">
        <div className="w-full bg-blue-800 text-white py-6 px-4">
          <h1 className="text-3xl font-bold text-center">
            Danh sách tài khoản
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <AccountsFilter onFilter={handleFilter} />

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Đang tải...</p>
            </div>
          ) : filteredAccounts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Không có tài khoản nào</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
              {filteredAccounts.map((account) => (
                <div
                  key={account.id}
                  onClick={() => navigate(`/account-details/${account.id}`)}
                  className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative bg-gray-200 h-48 overflow-hidden">
                    <img
                      src={account.thumb || "/placeholder.svg"}
                      alt={`Account ${account.id}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      SALE
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors text-xs">
                        {formatCurrency(account.price)}
                      </button>
                      <button
                        className="flex-1 px-3 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-700 hover:text-white transition-colors text-xs cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/account-details/${account.id}`);
                        }}
                      >
                        XEM CHI TIẾT
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <UserFooters />
    </div>
  );
}
