"use client";

import { CreditCard, Landmark, ShoppingCart } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import AccountsApi, {
  type GameAccount,
} from "~/api-requests/Accounts.requests";
import UserFooter from "~/components/user/UserFooter";
import UserHeader from "~/components/user/UserHeader";
import UserTopBar from "~/components/user/UserTopBar";
import { useAuthStore } from "~/store/useAuthStore";
import PurchaseAuthModal from "~/components/user/PurchaseAuthModal";

export default function AccountDetails() {
  const navigate = useNavigate();
  const { accountId } = useParams<{ accountId: string }>();
  const { isAuthenticated, authUser, updateBalance } = useAuthStore();
  const [account, setAccount] = useState<GameAccount | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [purchaseError, setPurchaseError] = useState<string | null>(null);
  const balance = authUser?.balance ?? 0;
  const isPurchased = account?.status === 1;

  useEffect(() => {
    const fetchAccount = async () => {
      if (!accountId) return;
      setIsLoading(true);
      try {
        const data = await AccountsApi.getAccountDetail(accountId);
        setAccount(data);
        setSelectedImageIndex(0);
      } catch (error) {
        console.error("Error fetching account detail:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAccount();
  }, [accountId]);

  const images = useMemo(() => {
    if (!account) return [] as string[];
    if (Array.isArray(account.images)) return account.images;
    return [];
  }, [account]);

  const handleBuyClick = () => setShowAuthModal(true);

  const handleConfirmPurchase = async () => {
    if (!accountId || !account) return;

    setIsPurchasing(true);
    setPurchaseError(null);

    try {
      const response = await AccountsApi.purchaseAccount(accountId);
      closeAuthModal();

      // Cập nhật balance sau khi mua thành công
      const newBalance = balance - account.price;
      updateBalance(newBalance);

      toast.success(`Mua tài khoản thành công!`);

      setTimeout(() => {
        navigate("/profile/purchased-accounts");
      }, 2000);
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        "Mua tài khoản thất bại. Vui lòng thử lại sau.";
      setPurchaseError(errorMessage);
      toast.error(errorMessage);
      console.error("Purchase error:", error);
    } finally {
      setIsPurchasing(false);
    }
  };

  const closeAuthModal = () => setShowAuthModal(false);

  return (
    <>
      <UserTopBar />
      <UserHeader />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg p-8">
          {isLoading ? (
            <p className="text-center text-gray-600">Đang tải...</p>
          ) : !account ? (
            <p className="text-center text-gray-600">
              Không tìm thấy tài khoản
            </p>
          ) : (
            <>
              {!isPurchased && (
                <div className="flex gap-4 justify-center mb-8">
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-700 transition shadow-md"
                    onClick={handleBuyClick}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    MUA NGAY
                  </button>
                  <button className="border-2 border-gray-800 text-gray-800 px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-50 transition">
                    <CreditCard className="w-5 h-5" />
                    NẠP THẺ
                  </button>
                  <button className="border-2 border-gray-800 text-gray-800 px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-50 transition">
                    <Landmark className="w-5 h-5" />
                    NẠP ATM
                  </button>
                </div>
              )}

              <div className="bg-gray-50 border-l-4 border-gray-300 p-4 mb-8 rounded">
                <p className="text-gray-700">
                  <span className="font-bold text-gray-800">Mô tả:</span>{" "}
                  {account.description || "Chưa có mô tả"}
                </p>
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
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 justify-center flex">
                      Thông tin tài khoản
                    </h3>
                    <div className="space-y-2">
                      {account.details ? (
                        Object.entries(account.details).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between items-center py-2 px-2 border-b border-gray-200 last:border-b-0 text-sm"
                          >
                            <span className="text-gray-700 font-medium capitalize">
                              {key.replace(/_/g, " ")}
                            </span>
                            <span className="text-gray-900 font-bold">
                              {value}
                            </span>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-gray-600">
                          Chưa có chi tiết
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <PurchaseAuthModal
        open={showAuthModal}
        price={account?.price ?? 0}
        title={"XÁC NHẬN MUA TÀI KHOẢN"}
        isAuthenticated={isAuthenticated}
        balance={balance}
        isPurchasing={isPurchasing}
        onPurchase={handleConfirmPurchase}
        onClose={closeAuthModal}
      />
      <UserFooter />
    </>
  );
}
