import { useState } from "react";
import WithdrawalHistory from "./WithdrawalHistory";

export default function WithDraw() {
  const [withdrawAmount, setWithdrawAmount] = useState("10000");
  const [selectedBank, setSelectedBank] = useState("Chọn Ngân Hàng Rút");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountOwner, setAccountOwner] = useState("");
  const [note, setNote] = useState("");

  const withdrawalHistory = [
    {
      id: 302,
      amount: "1.240.000 ₫",
      bank: "MBBank",
      account: "LAM HOANG AN",
      status: "Hoàn thành",
      time: "2025-12-09 19:44:48",
    },
    {
      id: 301,
      amount: "160.000 ₫",
      bank: "MBBank",
      account: "LAM HOANG AN",
      status: "Hoàn thành",
      time: "2025-12-07 14:31:10",
    },
    {
      id: 294,
      amount: "264.000 ₫",
      bank: "Techcombank",
      account: "LAM HOANG AN",
      status: "Hoàn thành",
      time: "2025-12-01 12:34:27",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="bg-white rounded-sm p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <div className="w-1 h-6 bg-purple-600 rounded-full"></div>
            <h2 className="text-lg font-semibold text-gray-800">
              Yêu Cầu Rút Tiền
            </h2>
          </div>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Số tiền rút
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ngân Hàng
              </label>
              <select
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option>Chọn Ngân Hàng Rút</option>
                <option>MBBank</option>
                <option>Techcombank</option>
                <option>VietcomBank</option>
              </select>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700">
                Số Tài Khoản
              </h3>
              <input
                type="text"
                placeholder="Nhập số tài khoản"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Chủ Tài Khoản
                </h3>
                <input
                  type="text"
                  placeholder="Nhập tên chủ tài khoản"
                  value={accountOwner}
                  onChange={(e) => setAccountOwner(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ghi Chú
              </label>
              <textarea
                placeholder="Nhập ghi chú cho admin nếu có"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-24"
              ></textarea>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-md transition duration-200">
              Rút Tiền Ngay
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <WithdrawalHistory withdrawalHistory={withdrawalHistory} />
      </div>
    </div>
  );
}
