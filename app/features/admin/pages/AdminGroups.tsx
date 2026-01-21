import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { formatDateTime } from "~/lib/utils";
import { useAccountsStore } from "~/store/useAccountsStore";
import { Pencil, Plus, Trash } from "lucide-react";

export default function AdminGroups() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const categoryId = params.get("categoryId");
  const { groups, isLoading, fetchGroupsByCategory } = useAccountsStore();

  useEffect(() => {
    if (categoryId) fetchGroupsByCategory(categoryId);
  }, [categoryId, fetchGroupsByCategory]);

  const groupList = categoryId && groups[categoryId] ? groups[categoryId] : [];

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <div className="flex items-center mb-6 justify-between">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-blue-700">
              Danh sách Groups
            </h2>
            <button
              className="bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded font-semibold text-sm ml-4"
              onClick={() => navigate(-1)}
            >
              Quay lại
            </button>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
            <Plus size={16} /> Thêm group
          </button>
        </div>
        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left font-bold text-black">
                  STT
                </th>
                <th className="px-4 py-3 text-left font-bold text-black">
                  TÊN NHÓM
                </th>
                <th className="px-4 py-3 text-left font-bold text-black">
                  ẢNH
                </th>
                <th className="px-4 py-3 text-left font-bold text-black">
                  NGÀY TẠO
                </th>
                <th className="px-4 py-3 text-left font-bold text-black">
                  THAO TÁC
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-500">
                    Đang tải nhóm...
                  </td>
                </tr>
              ) : groupList.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="py-8 text-center text-gray-400 italic"
                  >
                    Không có nhóm nào
                  </td>
                </tr>
              ) : (
                groupList.map((group, idx) => (
                  <tr
                    key={group.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3">
                      <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-bold ml-1">
                        {idx + 1}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-blue-700 text-base tracking-wide capitalize ml-5">
                      {group.title}
                    </td>
                    <td className="px-4 py-3">
                      {group.thumbnail ? (
                        <img
                          src={group.thumbnail}
                          alt={group.title}
                          className="w-50 h-30 object-cover rounded border"
                        />
                      ) : (
                        <span className="text-gray-400 italic">No image</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-black text-white text-xs px-2 py-1 rounded font-bold">
                        {formatDateTime(group.createdAt)}
                      </span>
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <button className="flex items-center gap-1 bg-cyan-600 hover:bg-cyan-700 text-white px-2 py-2 rounded text-xs font-bold">
                        <Pencil size={14} />
                      </button>
                      <button className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-2 py-2 rounded text-xs font-bold">
                        <Trash size={14} />
                      </button>
                      <button
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-2 py-2 rounded text-xs font-bold"
                        onClick={() =>
                          navigate(`/admin/game-accounts?groupId=${group.id}`)
                        }
                      >
                        Danh Sách Nick
                      </button>
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
