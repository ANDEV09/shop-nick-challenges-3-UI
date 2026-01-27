import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AccountsApi, {
  type GameAccount,
} from "~/api-requests/Accounts.requests";
import { formatDateTime } from "~/lib/utils";

export default function PendingAccounts() {
  const [accounts, setAccounts] = useState<GameAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await AccountsApi.getPendingAdminAccounts();
        setAccounts(data);
      } catch (err: any) {
        setError("Không thể tải danh sách nick chờ duyệt");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full mx-auto p-8">
      <div className="bg-white rounded-lg border-t-4 border-blue-500 shadow">
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-base uppercase font-bold text-gray-800">
            Danh sách nick chờ duyệt
          </h2>
        </div>
        <div className="px-6 pb-4">
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
                    <td className="px-2 py-4 text-center align-middle">
                      <div className="flex items-center justify-center h-full w-full">
                        <img
                          src={acc.thumb}
                          alt="thumb"
                          className="w-40 h-25 object-contain rounded"
                        />
                      </div>
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
                    <td className="px-5 py-4 text-center ">
                      <div className="flex flex-col gap-2 items-center justify-center">
                        <button
                          className="bg-blue-500 text-white px-4 py-1.5 rounded-full hover:bg-blue-600 text-xs w-20"
                          onClick={() =>
                            navigate(`/admin/account-approve/${acc.id}`)
                          }
                        >
                          Kiểm duyệt
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
