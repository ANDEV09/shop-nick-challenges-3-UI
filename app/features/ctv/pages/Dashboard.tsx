import StaffDashboard from "~/features/ctv/components/StaffDashboard";
import WithdrawPage from "~/features/ctv/components/WithDraw";
import PolicyNotice from "~/features/ctv/components/PolicyNotice";

export default function Dashboard() {
  return (
    <>
      <div className="px-8 pt-6">
        <PolicyNotice />
      </div>

      <StaffDashboard />
      <div className="px-8 pb-10">
        <WithdrawPage />
      </div>
    </>
  );
}
