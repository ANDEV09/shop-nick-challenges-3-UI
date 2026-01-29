import { useEffect, useState } from "react";
import Modal from "~/components/shared/Modal";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { parseImages, showSuccessToast } from "~/lib/utils";
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
  const [status, setStatus] = useState("2");
  const [description, setDescription] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    const fetchAccount = async () => {
      if (!accountId) return;
      setIsLoading(true);
      try {
        const data = await AccountsApi.getAccountDetailAdmin(accountId);
        setAccount(data);
        setAccountName(data.accountName || "");
        setPassword(data.password || "");
        setDescription(data.description || "");
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
    if (!accountId) return;
    try {
      await AccountsApi.approvePendingAccountStatus(
        accountId,
        Number(status),
        description,
        newPassword || undefined,
      );
      showSuccessToast("Cập nhật trạng thái Nick thành công!");
      navigate(-1);
    } catch (error: any) {
      alert("Có lỗi xảy ra khi cập nhật trạng thái!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg p-8">
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
                  <div className="grid grid-cols-3 gap-1 mb-4">
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
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  {account?.details &&
                    Object.keys(account.details).length > 0 && (
                      <>
                        <button
                          type="button"
                          className="px-4 py-2 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-200 hover:bg-blue-100"
                          onClick={() => setShowDetailsModal(true)}
                        >
                          Thông tin chi tiết
                        </button>
                        <Modal
                          open={showDetailsModal}
                          onClose={() => setShowDetailsModal(false)}
                        >
                          <div className="rounded-xl bg-white max-w-md w-full mx-auto">
                            <h3 className="text-xl font-bold text-center py-4 border-b">
                              Thông tin tài khoản
                            </h3>
                            <table className="w-full text-base">
                              <tbody>
                                {Object.entries(account.details).map(
                                  ([key, value]) => (
                                    <tr
                                      key={key}
                                      className="border-b last:border-b-0"
                                    >
                                      <td className="px-6 py-3 text-gray-700 font-medium w-1/2">
                                        {key}
                                      </td>
                                      <td className="px-6 py-3 text-right font-bold text-gray-900">
                                        {value}
                                      </td>
                                    </tr>
                                  ),
                                )}
                              </tbody>
                            </table>
                            <div className="flex justify-center py-4">
                              <button
                                type="button"
                                className="px-6 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700"
                                onClick={() => setShowDetailsModal(false)}
                              >
                                Đóng
                              </button>
                            </div>
                          </div>
                        </Modal>
                      </>
                    )}
                  <button
                    type="button"
                    className="px-4 py-2 rounded bg-blue-500 text-white font-bold hover:bg-blue-600 transition cursor-pointer"
                    onClick={() => navigate(-1)}
                  >
                    Quay lại
                  </button>
                </div>
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
                        className="w-full px-3 py-2 border rounded bg-gray-100 font-mono"
                        readOnly
                        placeholder="Không có dữ liệu"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          className="w-full px-3 py-2 border rounded bg-gray-100 font-mono pr-10"
                          readOnly
                          placeholder="Không có dữ liệu"
                        />
                        <button
                          type="button"
                          tabIndex={-1}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                          onClick={() => setShowPassword((v) => !v)}
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-1">
                        Mô tả tài khoản / Lý do hủy (nếu không duyệt)
                      </label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border rounded bg-white min-h-15"
                        placeholder="Mô tả tài khoản hoặc lý do hủy nếu không duyệt..."
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
                        <option value="2">Duyệt</option>
                        <option value="3">Không duyệt</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-center mt-6 gap-4">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-8 py-2 rounded font-bold hover:bg-blue-700 transition"
                    >
                      Xác nhận
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
