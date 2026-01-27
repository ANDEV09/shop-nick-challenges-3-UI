import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { parseImages } from "~/lib/utils";
import AccountsApi, {
  type GameAccount,
} from "~/api-requests/Accounts.requests";

export default function AccountApproveDetails() {
  const navigate = useNavigate();
  const { accountId } = useParams<{ accountId: string }>();
  const [account, setAccount] = useState<GameAccount | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [status, setStatus] = useState("approved");

  useEffect(() => {
    const fetchAccount = async () => {
      if (!accountId) return;
      setIsLoading(true);
      try {
        const data = await AccountsApi.getAccountDetailAdmin(accountId);
        setAccount(data);
        setAccountName(data.accountName || "");
        setPassword(data.password || "");
        setSelectedImageIndex(0);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchAccount();
  }, [accountId]);

  const images = account ? parseImages(account.images) : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call API to approve/reject account with new info
    // ...
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg p-8">
        {isLoading ? (
          <p className="text-center text-gray-600">Đang tải...</p>
        ) : !account ? (
          <p className="text-center text-gray-600">Không tìm thấy tài khoản</p>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-center mb-4">
                KIỂM DUYỆT TÀI KHOẢN
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-4">
                  <div className="rounded-lg border-2 border-gray-300 overflow-hidden bg-gray-200">
                    <img
                      src={
                        images[selectedImageIndex] ||
                        account.thumb ||
                        "/placeholder.svg"
                      }
                      alt={`Account Image ${account.id}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-700 mb-2">
                    Hình ảnh chi tiết:
                  </p>
                  <div className="grid grid-cols-3 gap-1">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`rounded border overflow-hidden aspect-video cursor-pointer transition ${
                          selectedImageIndex === index
                            ? "border-2 border-blue-600"
                            : "border border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Detail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="bg-gray-50 rounded-lg border border-gray-200 p-4"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
                    Thông tin kiểm duyệt
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-1">
                        Account Name
                      </label>
                      <input
                        type="text"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                        className="w-full px-3 py-2 border rounded bg-gray-100 font-mono"
                        required
                        readOnly={!accountName}
                        placeholder="Không có dữ liệu"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1">
                        Password
                      </label>
                      <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded bg-gray-100 font-mono"
                        required
                        readOnly={!password}
                        placeholder="Không có dữ liệu"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1">
                        Mật khẩu mới
                      </label>
                      <input
                        type="text"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1">
                        Trạng thái
                      </label>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                      >
                        <option value="approved">Duyệt</option>
                        <option value="rejected">Không được duyệt</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-center mt-6 gap-4">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition"
                    >
                      Xác nhận
                    </button>
                    <button
                      type="button"
                      className="border-2 border-gray-800 text-gray-800 px-6 py-2 rounded font-bold hover:bg-gray-50 transition"
                      onClick={() => navigate(-1)}
                    >
                      Quay lại
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
