import React from "react";
import { Plus } from "lucide-react";
import { CloudinaryUpload } from "~/components/shared/CloudinaryUpload";
import { cn } from "~/lib/utils";

interface StaffAccountFormProps {
  formData: {
    accountName: string;
    password: string;
    price: string;
    description: string;
    thumb: string;
    images: string[];
    details: { key: string; value: string }[];
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleDetailChange: (
    idx: number,
    field: "key" | "value",
    value: string,
  ) => void;
  addDetailRow: () => void;
  removeDetailRow: (idx: number) => void;
  handleSubmit: () => void;
  handleReset: () => void;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export const StaffAccountForm: React.FC<StaffAccountFormProps> = ({
  formData,
  handleInputChange,
  handleDetailChange,
  addDetailRow,
  removeDetailRow,
  handleSubmit,
  handleReset,
  setFormData,
}) => {
  return (
    <div className="bg-white rounded-lg border-t-4 border-blue-500 shadow">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">
          THÊM TÀI KHOẢN MỚI
        </h2>
      </div>
      <div className="p-6 space-y-3">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tên tài khoản
            </label>
            <input
              name="accountName"
              value={formData.accountName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Nhập tên tài khoản"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mật khẩu
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Nhập mật khẩu"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Giá bán
          </label>
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Nhập giá bán"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mô tả
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Nhập mô tả tài khoản"
            rows={2}
          />
        </div>
        <div>
          <CloudinaryUpload
            label="Ảnh đại diện (thumb)"
            multiple={false}
            value={formData.thumb}
            onChange={(urls) =>
              setFormData((prev: any) => ({ ...prev, thumb: urls[0] }))
            }
            uploadPreset="unsigned_preset"
            cloudName="dzipftaf1"
          />
          <input type="hidden" name="thumb" value={formData.thumb} readOnly />
        </div>
        <div>
          <CloudinaryUpload
            label="Danh sách ảnh mô tả"
            multiple={true}
            value={formData.images}
            onChange={(urls) =>
              setFormData((prev: any) => ({
                ...prev,
                images: urls.filter((u: string) => !!u),
              }))
            }
            uploadPreset="unsigned_preset"
            cloudName="dzipftaf1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chi tiết (ví dụ: tướng-100, trang phục-50, rank-cao thủ...)
          </label>
          {formData.details.map((d, idx) => (
            <div key={idx} className="flex gap-2 mb-2">
              <input
                value={d.key}
                onChange={(e) => handleDetailChange(idx, "key", e.target.value)}
                className="w-1/3 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Thuộc tính (key)"
              />
              <input
                value={d.value}
                onChange={(e) =>
                  handleDetailChange(idx, "value", e.target.value)
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Giá trị (value)"
              />
              {formData.details.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeDetailRow(idx)}
                  className="text-red-500 font-bold px-2"
                >
                  X
                </button>
              )}
              {idx === formData.details.length - 1 && (
                <button
                  type="button"
                  onClick={addDetailRow}
                  className="text-blue-500 font-bold px-2"
                >
                  <Plus size={18} />
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-2 justify-left mt-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
          >
            Thêm tài khoản
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 font-semibold"
          >
            Đặt lại
          </button>
        </div>
      </div>
    </div>
  );
};
