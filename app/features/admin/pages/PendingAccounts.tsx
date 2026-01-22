import { useEffect, useState } from "react";
import AccountsApi, {
  type GameAccount,
} from "~/api-requests/Accounts.requests";

export default function PendingAccounts() {
  const [accounts, setAccounts] = useState<GameAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
                        src={acc.thumb}
                        alt="thumb"
                        className="w-16 h-10 object-cover rounded border mx-auto"
                      />
                    </td>
                    <td className="border px-2 py-1 font-semibold">
                      {acc.accountName}
                    </td>
                    <td className="border px-2 py-1">{acc.createdAt}</td>
                    <td className="border px-2 py-1">
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded">
                        {acc.status}
                      </span>
                    </td>
                    <td className="border px-2 py-1 flex flex-col gap-1 items-center justify-center">
                      <button className="bg-green-500 text-white px-2 py-1 rounded mb-1 hover:bg-green-600 text-xs">
                        DUYỆT
                      </button>
                      <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs">
                        TỪ CHỐI
                      </button>
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
