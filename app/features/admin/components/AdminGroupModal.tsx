import React from "react";
import Modal from "~/components/shared/Modal";

interface AdminGroupModalProps {
  open: boolean;
  onClose: () => void;
  form: { title: string; thumbnail: string; status: number };
  setForm: React.Dispatch<
    React.SetStateAction<{ title: string; thumbnail: string; status: number }>
  >;
  formError: string;
  formLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  isEdit?: boolean;
}

const AdminGroupModal: React.FC<AdminGroupModalProps> = ({
  open,
  onClose,
  form,
  setForm,
  formError,
  formLoading,
  onSubmit,
  isEdit = false,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-lg font-bold mb-4">
        {isEdit ? "Chỉnh sửa nhóm" : "Thêm group mới"}
      </h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Tên Nhóm</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Thumbnail (URL)
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.thumbnail}
            onChange={(e) =>
              setForm((f) => ({ ...f, thumbnail: e.target.value }))
            }
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Trạng thái</label>
          <select
            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={form.status}
            onChange={(e) =>
              setForm((f) => ({ ...f, status: Number(e.target.value) }))
            }
          >
            <option value={1}>Hiển thị</option>
            <option value={0}>Ẩn</option>
          </select>
        </div>
        {formError && <div className="text-red-500 text-sm">{formError}</div>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold disabled:opacity-60"
          disabled={formLoading}
        >
          {formLoading
            ? isEdit
              ? "Đang lưu..."
              : "Đang thêm..."
            : isEdit
              ? "Lưu thay đổi"
              : "Thêm group"}
        </button>
      </form>
    </Modal>
  );
};

export default AdminGroupModal;
