import { Wallet, X, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { formatCurrency } from "~/lib/utils";

type AccountHistory = {
  time: string;
  username: string;
  password: string;
  amount: string | number;
};

export default function AccountHistories() {
  const [selectedAccount, setSelectedAccount] = useState<AccountHistory | null>(
    null,
  );
  const [visiblePasswords, setVisiblePasswords] = useState<Set<number>>(
    new Set(),
  );

  const togglePasswordVisibility = (index: number) => {
    const newSet = new Set(visiblePasswords);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setVisiblePasswords(newSet);
  };

  const accounts: AccountHistory[] = [
    {
      time: "2025-01-15 10:30",
      username: "takerynnaru",
      password: "abc123",
      amount: 50000,
    },
    {
      time: "2025-01-14 15:20",
      username: "guest01",
      password: "abc123",
      amount: 75000,
    },
    {
      time: "2025-01-13 09:15",
      username: "roblox_fan",
      password: "xyz789",
      amount: 100000,
    },
        {
      time: "2025-01-13 09:15",
      username: "roblox_fan",
      password: "xyz789",
      amount: 100000,
    },
        {
      time: "2025-01-13 09:15",
      username: "roblox_fan",
      password: "xyz789",
      amount: 100000,
    },
  ];

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
            {accounts.length === 0 ? (
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
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {account.time}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {account.username}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <span>
                        {visiblePasswords.has(index)
                          ? account.password
                          : "•••••••"}
                      </span>
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
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {formatCurrency(account.amount)}
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
