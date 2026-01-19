import { useEffect, useState } from "react";
import { Link } from "react-router";
import { formatCurrency } from "~/lib/utils";

interface PurchaseAuthModalProps {
  open: boolean;
  price: number;
  title?: string;
  loginPath?: string;
  depositCardPath?: string;
  depositAtmPath?: string;
  isAuthenticated: boolean;
  balance?: number;
  isPurchasing?: boolean;
  error?: string | null;
  onClose: () => void;
  onPurchase?: () => void;
}

export default function PurchaseAuthModal({
  open,
  price,
  title = "XÁC NHẬN MUA TÀI KHOẢN",
  loginPath = "/login",
  depositAtmPath = "#",
  isAuthenticated,
  balance = 0,
  isPurchasing = false,
  error = null,
  onClose,
  onPurchase,
}: PurchaseAuthModalProps) {
  const [visible, setVisible] = useState(false);

  const missingAmount = Math.max(price - balance, 0);
  const shouldTopUp = isAuthenticated && missingAmount > 0;
  const readyToBuy = isAuthenticated && !shouldTopUp;

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

  const handlePurchaseClick = () => {
    onPurchase?.();
    handleClose();
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
              <span className="text-sm font-semibold text-gray-700">
                Giá tiền:
              </span>
              <span className="text-lg font-bold text-blue-600 mb-0.5">
                {formatCurrency(price)} đ
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

          {!readyToBuy && (
            <div className="bg-amber-50 border border-amber-200 text-amber-700 text-sm rounded-lg p-3">
              {!isAuthenticated
                ? "Vui lòng đăng nhập để thực hiện giao dịch."
                : `Bạn cần thêm ${formatCurrency(missingAmount)} để mua tài khoản này. Vui lòng nạp thêm trước khi tiếp tục.`}
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3">
              {error}
            </div>
          )}
        </div>

        <div className="px-6 pb-6 flex gap-3">
          {!isAuthenticated && (
            <>
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
            </>
          )}

          {shouldTopUp && (
            <>
              <Link
                to={depositAtmPath}
                className="flex-3 text-center px-4 py-2 rounded-lg bg-gray-900 text-white font-semibold uppercase tracking-wide hover:bg-black transition"
                onClick={handleClose}
              >
                Nạp ATM
              </Link>
              <button
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-gray-800 font-semibold uppercase tracking-wide hover:bg-gray-50 transition"
                onClick={handleClose}
              >
                Đóng
              </button>
            </>
          )}

          {readyToBuy && (
            <>
              <button
                className="flex-1 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold uppercase tracking-wide hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handlePurchaseClick}
                disabled={isPurchasing}
              >
                {isPurchasing ? "Đang xử lý..." : "Xác nhận mua"}
              </button>
              <button
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-gray-800 font-semibold uppercase tracking-wide hover:bg-gray-50 transition disabled:opacity-50"
                onClick={handleClose}
                disabled={isPurchasing}
              >
                Đóng
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
