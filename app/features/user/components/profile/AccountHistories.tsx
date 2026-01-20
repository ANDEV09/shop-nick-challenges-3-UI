import { Wallet, X, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { formatCurrency, formatDateTime } from "~/lib/utils";
import AccountsApi, {
  type PurchasedAccount,
} from "~/api-requests/Accounts.requests";

export default function AccountHistories() {
  const [selectedAccount, setSelectedAccount] =
    useState<PurchasedAccount | null>(null);
  const [visiblePasswords, setVisiblePasswords] = useState<Set<number>>(
    new Set(),
  );
  const [accounts, setAccounts] = useState<PurchasedAccount[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAccounts = async () => {
      setLoading(true);
      try {
        const data = await AccountsApi.getMyPurchasedAccounts();
        setAccounts(data);
      } catch (error) {
        console.error("Error fetching purchased accounts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAccounts();
  }, []);

  const togglePasswordVisibility = (index: number) => {
    const newSet = new Set(visiblePasswords);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setVisiblePasswords(newSet);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="border-b-3 border-blue-600 pb-3 mb-6 bg-gray-50 pt-3 px-4 rounded-t-md">
        <h2 className="text-base font-bold text-blue-600 flex items-center gap-2 ">
          <Wallet className="mb-1" size={18} />
          TÀI KHOẢN ĐÃ MUA
        </h2>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600">
              <th className="px-6 py-4 text-left text-white font-bold text-sm">
                THỜI GIAN
              </th>
              <th className="px-6 py-4 text-left text-white font-bold text-sm">
                USERNAME
              </th>
              <th className="px-6 py-4 text-left text-white font-bold text-sm">
                PASSWORD
              </th>
              <th className="px-6 py-4 text-left text-white font-bold text-sm">
                SỐ TIỀN
              </th>
              <th className="px-6 py-4 text-left text-white font-bold text-sm">
                THAO TÁC
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-12 text-center text-gray-500"
                >
                  Đang tải...
                </td>
              </tr>
            ) : accounts.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-12 text-center text-gray-400 italic"
                >
                  Không có dữ liệu
                </td>
              </tr>
            ) : (
              accounts.map((account, index) => (
                <tr
                  key={account.id ?? index}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {formatDateTime(account.updatedAt)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {account.accountName || "—"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <span>
                        {visiblePasswords.has(index)
                          ? account.password || "—"
                          : account.password
                            ? "•••••••"
                            : "—"}
                      </span>
                      {account.password && (
                        <button
                          onClick={() => togglePasswordVisibility(index)}
                          className="text-blue-600 hover:text-blue-800"
                          title={visiblePasswords.has(index) ? "Ẩn" : "Xem"}
                        >
                          {visiblePasswords.has(index) ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {formatCurrency(account.price)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <button
                      onClick={() => setSelectedAccount(account)}
                      className="text-blue-600 hover:underline"
                    >
                      Chi tiết
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
