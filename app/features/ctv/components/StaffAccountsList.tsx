import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import AccountsApi from "~/api-requests/Accounts.requests";
import type { GameAccount } from "~/types/accounts.types";

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
              <table className="min-w-full border text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-2 py-1">STT</th>
                    <th className="border px-2 py-1">ẢNH</th>
                    <th className="border px-2 py-1">TÀI KHOẢN</th>
                    <th className="border px-2 py-1">THỜI GIAN ĐĂNG</th>
                    <th className="border px-2 py-1">TRẠNG THÁI</th>
                    <th className="border px-2 py-1">THAO TÁC</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((acc, idx) => (
                    <tr key={acc.id} className="text-center">
                      <td className="border px-2 py-1">{idx + 1}</td>
                      <td className="border px-2 py-1">
                        <img
                          src={
                            Array.isArray(acc.images)
                              ? acc.images[0]
                              : acc.thumb
                          }
                          alt="thumb"
                          className="w-16 h-10 object-cover rounded border mx-auto"
                        />
                      </td>
                      <td className="border px-2 py-1 font-semibold">
                        {/* {acc.accountName} */}
                      </td>
                      <td className="border px-2 py-1">
                        {acc.createdAt
                          ? acc.createdAt.replace("T", " ").slice(0, 19)
                          : "-"}
                      </td>
                      <td className="border px-2 py-1">
                        {acc.status === 2 ? "Đã bán" : "Đang bán"}
                      </td>
                      <td className="border px-2 py-1 flex flex-col gap-1 items-center justify-center">
                        <button className="bg-red-500 text-white px-2 py-1 rounded mb-1 hover:bg-red-600 text-xs">
                          XÓA
                        </button>
                        <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-xs flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.232 5.232l3.536 3.536M9 13h3l8-8a2.828 2.828 0 00-4-4l-8 8v3zm0 0v3a2 2 0 002 2h3"
                            />
                          </svg>
                          EDIT
                        </button>
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
