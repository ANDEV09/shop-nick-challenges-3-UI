import { showSuccessToast } from "~/lib/utils";

interface AtmTopupProps {
  username: string;
}

export default function AtmTopup({ username }: AtmTopupProps) {
  const BANK_CODE = import.meta.env.VITE_BANK_CODE || "TPB";
  const ACCOUNT_NUMBER = import.meta.env.VITE_BANK_ACCOUNT || "";

  const qrContent = `Naptien ${username}`;
  const qrUrl = `https://qr.sepay.vn/img?acc=${ACCOUNT_NUMBER}&bank=${BANK_CODE}&amount=0&des=${qrContent}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(qrContent);
    showSuccessToast("Đã sao chép nội dung chuyển khoản");
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-lg font-bold">Nạp tiền ATM qua mã QR</h2>
      <img
        src={qrUrl}
        alt="QR Nạp tiền ATM"
        className="w-50 h-50 border rounded-lg"
      />
      <div className="text-center">
        <div className="font-semibold">
          <div className="font-semibold">
            Ngân hàng: <span className="text-blue-600">TP Bank</span>
          </div>
          Số tài khoản: <span className="text-blue-600">{ACCOUNT_NUMBER}</span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="font-semibold">Nội dung chuyển khoản:</span>
          <button
            onClick={handleCopy}
            className="bg-gray-100 rounded px-2 py-1 text-blue-700 font-bold border border-gray-300 hover:bg-blue-50 active:bg-blue-100 transition cursor-pointer"
            title="Nhấn để copy"
          >
            {qrContent}
          </button>
        </div>
      </div>
    </div>
  );
}
