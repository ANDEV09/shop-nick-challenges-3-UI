import { useState, useEffect } from "react";
import AdminCategoryModal from "../components/AdminCategoryModal";
import { Plus, Pencil, Trash } from "lucide-react";
import { formatDateTime, showSuccessToast } from "~/lib/utils";
import { Link } from "react-router-dom";
import AccountsApi from "~/api-requests/Accounts.requests";
import { type GameCategory } from "~/types/accounts.types";

export default function AdminCategories() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [, setCurrentTablePage] = useState(1);
  const [categories, setCategories] = useState<GameCategory[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState({ name: "", status: 1 });
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const fetchAdminCategories = async () => {
    setIsLoading(true);
    try {
      const res = await AccountsApi.getAdminCategories();
      setCategories(Array.isArray(res) ? res : []);
    } catch (err) {
      setCategories([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminCategories();
  }, []);

  async function handleCategorySubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormLoading(true);
    setFormError("");
    try {
      if (editId) {
        await AccountsApi.updateCategory(editId, {
          name: form.name,
          status: form.status,
        });
        showSuccessToast("Cập nhật danh mục thành công!");
      } else {
        await AccountsApi.addCategory({ name: form.name, status: form.status });
        showSuccessToast("Thêm danh mục thành công!");
      }
      setOpenModal(false);
      setForm({ name: "", status: 1 });
      setEditId(null);
      fetchAdminCategories();
    } catch (err) {
      setFormError("Có lỗi xảy ra, thử lại!");
    } finally {
      setFormLoading(false);
    }
  }

  const handleDeleteCategory = async (categoryId: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
      try {
        await AccountsApi.deleteCategory(categoryId);
        showSuccessToast("Xóa danh mục thành công!");
        fetchAdminCategories();
      } catch (err) {
        alert("Xóa thất bại. Vui lòng thử lại!");
      }
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold text-gray-800">
          Admin: Accounts Category
        </h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="text-gray-400">|</span>
          <span>Quản Lý Chuyên Mục</span>
        </div>
      </div>

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

        <div className="mb-3 overflow-x-auto">
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
                  TRẠNG THÁI
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
                    colSpan={4}
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
                      {cat.status === 1 ? (
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold border border-green-300">
                          Hiển thị
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded font-bold border border-red-300">
                          Ẩn
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <button
                        className="flex items-center gap-1 bg-cyan-600 hover:bg-cyan-700 text-white px-2 py-2 rounded text-xs font-bold"
                        onClick={() => {
                          setEditId(cat.id);
                          setForm({ name: cat.name, status: cat.status ?? 1 });
                          setFormError("");
                          setOpenModal(true);
                        }}
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-2 py-2 rounded text-xs font-bold"
                        onClick={() => handleDeleteCategory(cat.id)}
                      >
                        <Trash size={14} />
                      </button>
                      <Link
                        to={`/admin/game-groups?categoryId=${cat.id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded text-xs font-bold inline-block text-center"
                      >
                        XEM NHÓM
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <button
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700 mt-6"
            onClick={() => {
              setEditId(null);
              setForm({ name: "", status: 1 });
              setFormError("");
              setOpenModal(true);
            }}
          >
            <Plus size={18} />
            Thêm danh mục mới
          </button>
        </div>
      </div>

      <AdminCategoryModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setEditId(null);
        }}
        form={form}
        setForm={setForm}
        formError={formError}
        formLoading={formLoading}
        onSubmit={handleCategorySubmit}
        isEdit={!!editId}
      />
    </div>
  );
}
