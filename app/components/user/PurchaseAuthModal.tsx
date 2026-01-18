import { useEffect, useState } from "react";
import { Link } from "react-router";
import { formatCurrency } from "~/lib/utils";

interface PurchaseAuthModalProps {
  open: boolean;
  price: number;
  title?: string;
  loginPath?: string;
  onClose: () => void;
}

export default function PurchaseAuthModal({
  open,
  price,
  title = "XÁC NHẬN MUA TÀI KHOẢN",
  loginPath = "/login",
  onClose,
}: PurchaseAuthModalProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [open]);

  if (!open) return null;

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose(), 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-modal
      role="dialog"
    >
      <div
        className={`bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-200 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex items-center justify-between bg-gray-900 text-white px-4 py-3">
          <h2 className="text-base font-semibold">{title}</h2>
          <button
            onClick={handleClose}
            className="text-white/80 hover:text-white text-2xl leading-none font-semibold mb-0.5"
            aria-label="Đóng"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="bg-gray-50 border rounded-lg p-4">
            <div className="  mx-4 flex items-center gap-8">
              <span className="text-sm font-semibold text-gray-700">Giá tiền:</span>
              <span className="text-lg font-bold text-blue-600 mb-0.5">
                {formatCurrency(price)}
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <input
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập mã giảm giá nếu có"
            />
            <button className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-black transition">
              Kiểm tra
            </button>
          </div>

          <div className="bg-amber-50 border border-amber-200 text-amber-700 text-sm rounded-lg p-3">
            Vui lòng đăng nhập để thực hiện giao dịch.
          </div>
        </div>

        <div className="px-6 pb-6 flex gap-3">
          <Link
            to={loginPath}
            className="flex-3 text-center px-4 py-2 rounded-lg bg-gray-900 text-white font-semibold uppercase tracking-wide hover:bg-black transition"
            onClick={handleClose}
          >
            Đăng nhập
          </Link>
          <button
            className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-gray-800 font-semibold uppercase tracking-wide hover:bg-gray-50 transition"
            onClick={handleClose}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
