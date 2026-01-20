import { useState } from "react";
import { Plus } from "lucide-react";

export default function GameCategoryPage() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [, setCurrentTablePage] = useState(1);

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Show</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentTablePage(1);
              }}
              className="rounded border border-gray-300 px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="text-sm text-gray-600">entries</span>
          </div>
        </div>

        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  #
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Ưu tiên
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Thao tác
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Tên chuyên mục
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Số nhóm con
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Người tạo
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Trạng thái
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Thời gian
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="py-8 text-center text-gray-500">
                  No data available in table
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
