import UserFooter from "~/components/user/UserFooter";
import UserHeader from "~/components/user/UserHeader";
import UserTopBar from "~/components/user/UserTopBar";
import UserSidebar from "~/features/user/components/profile/UserSidebar";
import ProfileInfo from "~/features/user/components/profile/ProfileInfo";
import { CircleUserRound } from "lucide-react";
import AccountHistories from "~/features/user/components/profile/AccountHistories";
import { useNavigate, useParams } from "react-router";

export default function Profile() {
  const navigate = useNavigate();
  const { tab } = useParams();

  const activeMenu = tab || "profile-info";

  const handleMenuClick = (menuId: string) => {
    navigate(`/profile/${menuId}`);
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "profile-info":
        return <ProfileInfo />;
      // case "card-topup":
      //   return <PlaceholderSection title="Nạp tiền thẻ cào" />;
      // case "atm-topup":
      //   return <PlaceholderSection title="Nạp tiền ATM" />;
      // case "balance-history":
      //   return <PlaceholderSection title="Biến động số dư" />;
      case "purchased-accounts":
        return <AccountHistories />;
      // case "spin-history":
      //   return <PlaceholderSection title="Lịch sử vòng quay" />;
      default:
        return <ProfileInfo />;
    }
  };

  return (
    <>
      <UserTopBar />
      <UserHeader />

      <div className="max-w-7xl mx-auto px-4 my-12">
        <div className="bg-blue-600 text-white p-4 rounded-t-md">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <CircleUserRound strokeWidth={2} className="mb-1" />
            THÔNG TIN TÀI KHOẢN
          </h1>
        </div>

        <div className="flex mb-8">
          <UserSidebar activeMenu={activeMenu} onMenuClick={handleMenuClick} />
          <div className="flex-1 bg-white p-8 shadow-md rounded-t-md">
            {renderContent()}
          </div>
        </div>
      </div>

      <UserFooter />
    </>
  );
}
