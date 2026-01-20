import React from "react";
import { X } from "lucide-react";

export interface StaffAccountsListProps {
  title?: string;
}

export const StaffAccountsList: React.FC<StaffAccountsListProps> = ({
  title = "DANH SÁCH TÀI KHOẢN",
}) => (
  <div className="w-full mx-auto mt-6">
    <div className="bg-white rounded-lg border-t-4 border-blue-500 shadow">
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
      </div>
    </div>
  </div>
);
