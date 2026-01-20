import { useState } from "react";
import { Search } from "lucide-react";

interface WithdrawalItem {
  id: number;
  amount: string;
  bank: string;
  account: string;
  status: string;
  time: string;
}

interface WithdrawalHistoryProps {
  withdrawalHistory: WithdrawalItem[];
}

export default function WithdrawalHistory({
  withdrawalHistory,
}: WithdrawalHistoryProps) {
  const [showEntries, setShowEntries] = useState(10);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="bg-white rounded-sm p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
        <div className="w-1 h-6 bg-purple-600 rounded-full"></div>
        <h2 className="text-lg font-semibold text-gray-800">
          Lịch Sử Rút Tiền
        </h2>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">Show</span>
          <select
            value={showEntries}
            onChange={(e) => setShowEntries(Number(e.target.value))}
            className="px-3 py-1.5 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span className="text-sm text-gray-700">entries</span>
        </div>
        <div className="relative">
          <Search
            size={18}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="px-3 py-1.5 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-40"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-3 font-semibold text-gray-700">
                #
              </th>
              <th className="text-left py-3 px-3 font-semibold text-gray-700">
                Số tiền
              </th>
              <th className="text-left py-3 px-3 font-semibold text-gray-700">
                Ngân hàng
              </th>
              <th className="text-left py-3 px-3 font-semibold text-gray-700">
                Số tài khoản
              </th>
              <th className="text-left py-3 px-3 font-semibold text-gray-700">
                Trạng thái
              </th>
              <th className="text-left py-3 px-3 font-semibold text-gray-700">
                Thời gian
              </th>
              <th className="text-left py-3 px-3 font-semibold text-gray-700">
                Ghi chú
              </th>
            </tr>
          </thead>
          <tbody>
            {withdrawalHistory.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-3 text-gray-700">{item.id}</td>
                <td className="py-3 px-3 text-gray-700 font-medium">
                  {item.amount}
                </td>
                <td className="py-3 px-3 text-gray-700">{item.bank}</td>
                <td className="py-3 px-3 text-gray-700">{item.account}</td>
                <td className="py-3 px-3">
                  <span className="text-purple-600 font-medium">
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-3 text-gray-600 text-xs">{item.time}</td>
                <td className="py-3 px-3 text-gray-500">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-600">
          Showing 1 to 3 of 3 entries
        </span>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition">
            Previous
          </button>
          <button className="px-3 py-1.5 text-sm bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700 transition">
            1
          </button>
          <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
