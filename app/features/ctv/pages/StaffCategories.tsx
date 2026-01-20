import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatDateTime } from "~/lib/utils";
import { useAccountsStore } from "~/store/useAccountsStore";

export default function StaffCategories() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [, setCurrentTablePage] = useState(1);
  const { categories, isLoading, fetchCategories } = useAccountsStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

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
                  STT
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  TÊN CHUYÊN MỤC
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  NGÀY TẠO
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  THAO TÁC
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-500">
                    Đang tải danh mục...
                  </td>
                </tr>
              ) : categories.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="py-8 text-center text-gray-400 italic"
                  >
                    Không có danh mục nào
                  </td>
                </tr>
              ) : (
                categories.map((cat, idx) => (
                  <tr
                    key={cat.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3">
                      <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-bold ml-1">
                        {idx + 1}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-red-600 text-base tracking-wide capitalize ml-5">
                        {cat.name}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-black text-white text-xs px-2 py-1 rounded font-bold">
                        {formatDateTime(cat.createdAt)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        to={`/staff/game-groups?categoryId=${cat.id}`}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-2 py-2 rounded text-xs font-bold inline-block text-center"
                      >
                        XEM NHÓM
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
