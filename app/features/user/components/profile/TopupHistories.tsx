import { Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import { formatCurrency, formatDateTime } from "~/lib/utils";
import { useAuthStore } from "~/store/useAuthStore";
import UserApi from "~/api-requests/user.requests";

interface TopupHistory {
  id: string;
  amount: number;
  balanceAfter: number;
  balanceBefore: number;
  createdAt: string;
  status: string;
}

export default function TopupHistories() {
  const [histories, setHistories] = useState<TopupHistory[]>([]);
  const [loading, setLoading] = useState(false);
  const { authUser } = useAuthStore();

  useEffect(() => {
    const fetchHistories = async () => {
      if (!authUser?.id) return;
      setLoading(true);
      try {
        const data = await UserApi.getUserDepositHistories(authUser.id);
        setHistories(data || []);
      } catch (error) {
        setHistories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchHistories();
  }, [authUser?.id]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="border-b-3 border-blue-600 pb-3 mb-6 bg-gray-50 pt-3 px-4 rounded-t-md">
        <h2 className="text-base font-bold text-blue-600 flex items-center gap-2 ">
          <Wallet className="mb-1" size={18} />
          LỊCH SỬ NẠP TIỀN
        </h2>
      </div>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600">
              <th className="px-6 py-4 text-left text-white font-bold text-sm">
                STT
              </th>

              <th className="px-6 py-4 text-left text-white font-bold text-sm">
                SỐ DƯ TRƯỚC
              </th>
              <th className="px-6 py-4 text-left text-white font-bold text-sm">
                SỐ DƯ SAU
              </th>
              <th className="px-6 py-4 text-left text-white font-bold text-sm">
                SỐ TIỀN
              </th>
              <th className="px-6 py-4 text-left text-white font-bold text-sm">
                TRẠNG THÁI
              </th>
              <th className="px-6 py-4 text-left text-white font-bold text-sm">
                THỜI GIAN
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-12 text-center text-gray-500"
                >
                  Đang tải...
                </td>
              </tr>
            ) : histories.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-12 text-center text-gray-400 italic"
                >
                  Không có dữ liệu
                </td>
              </tr>
            ) : (
              histories.map((item, index) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-bold text-red-500">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                    {formatCurrency(item.balanceBefore ?? 0)} đ
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                    {formatCurrency(item.balanceAfter ?? 0)} đ
                  </td>
                  <td className="px-6 py-4 font-semibold text-sm text-gray-600">
                    {formatCurrency(item.amount ?? 0)} đ
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-green-700">
                    {item.status}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                    {formatDateTime(item.createdAt)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
