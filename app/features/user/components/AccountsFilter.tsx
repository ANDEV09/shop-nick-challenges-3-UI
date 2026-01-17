import { useState } from "react";
import { Search, RotateCcw } from "lucide-react";

export default function AccountsFilter() {
  const [accountId, setAccountId] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  return (
    <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">
            Mã số:
          </label>
          <input
            type="text"
            placeholder="Nhập Mã số"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">
            Giá:
          </label>
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="all">Tất cả</option>
            <option value="low">Dưới 100K</option>
            <option value="medium">100K - 500K</option>
            <option value="high">Trên 500K</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">
            Trạng thái:
          </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="all">Trạng Thái</option>
            <option value="available">Còn hàng</option>
            <option value="sold">Đã bán</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4 justify-end">
        <button className="px-4 py-1.5 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm">
          <Search size={16} />
          TÌM KIẾM
        </button>
        <button className="px-4 py-1.5 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50 transition-colors flex items-center gap-2 text-sm">
          <RotateCcw size={16} />
          ĐẶT LẠI
        </button>
      </div>
    </div>
  );
}
