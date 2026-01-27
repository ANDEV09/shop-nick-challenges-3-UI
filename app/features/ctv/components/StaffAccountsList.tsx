import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import AccountsApi from "~/api-requests/Accounts.requests";
import type { GameAccount } from "~/types/accounts.types";
import { formatDateTime } from "~/lib/utils";

export interface StaffAccountsListProps {
  title?: string;
}

export const StaffAccountsList: React.FC<StaffAccountsListProps> = ({
  title = "DANH SÁCH TÀI KHOẢN",
}) => {
  const [accounts, setAccounts] = useState<GameAccount[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    AccountsApi.getMySellingAccounts()
      .then((data) => {
        setAccounts(data);
        setError(null);
      })
      .catch(() => {
        setError("Không thể tải danh sách tài khoản đã đăng bán.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full mx-auto mt-6">
      <div className="bg-white rounded-lg border-t-4 border-blue-500 shadow">
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>
        <div className="px-6 pb-4">
          {loading && <div>Đang tải...</div>}
          {error && <div className="text-red-500">{error}</div>}
          {!loading && !error && accounts.length === 0 && (
            <div>Chưa có tài khoản nào được đăng bán.</div>
          )}
          {!loading && !error && accounts.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-center font-semibold text-gray-700">
                      STT
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-700">
                      ẢNH
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-700">
                      TÀI KHOẢN
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-700">
                      GIÁ
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-700">
                      THỜI GIAN ĐĂNG
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-700">
                      TRẠNG THÁI
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-700">
                      THAO TÁC
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((acc, idx) => (
                    <tr
                      key={acc.id}
                      className="hover:bg-gray-50  border-b border-gray-100 "
                    >
                      <td className="px-2 py-4 text-center">
                        <span className=" bg-red-600 text-white text-xs px-2 py-1 rounded font-bold ml-1">
                          {idx + 1}
                        </span>
                      </td>
                      <td className="px-2 py-4 text-center">
                        <img
                          src={acc.thumb}
                          alt="thumb"
                          className="w-40 h-25 object-contain rounded"
                        />
                      </td>
                      <td className="px-2 py-4 text-center font-semibold ">
                        {acc.accountName}
                      </td>
                      <td className="px-2 py-4 text-center font-bold text-blue-600">
                        {acc.price?.toLocaleString()}đ
                      </td>
                      <td className="px-2 py-4 text-center">
                        {acc.createdAt ? formatDateTime(acc.createdAt) : "-"}
                      </td>
                      <td className="px-2 py-4 text-center">
                        {acc.status === 2
                          ? "Đang bán"
                          : acc.status === 0
                          ? "Chờ duyệt"
                          : ""}
                      </td>
                      <td className="px-2 py-4 text-center ">
                        <div className="flex flex-col gap-2 justify-center">
                          <button className="bg-red-500 text-white px-3 py-1.5 rounded-full hover:bg-red-600 text-xs w-20">
                            XÓA
                          </button>
                          <button className="bg-blue-500 text-white px-3 py-1.5 rounded-full hover:bg-blue-600 text-xs w-20">
                            EDIT
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
