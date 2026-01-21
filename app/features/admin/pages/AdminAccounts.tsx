import { useLocation } from "react-router-dom";
import { StaffAccountsList } from "~/features/ctv/components/StaffAccountsList";
import PolicyNotice from "~/features/ctv/components/PolicyNotice";
import { StaffAccountForm } from "~/features/ctv/components/StaffAccountForm";
import { useAdminAccountForm } from "~/features/admin/hooks/useAdminAccountForm";

export default function AdminAccounts() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const groupId = params.get("groupId");
  const {
    formData,
    setFormData,
    handleInputChange,
    handleDetailChange,
    addDetailRow,
    removeDetailRow,
    handleSubmit,
    handleReset,
  } = useAdminAccountForm(groupId);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StaffAccountForm
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          handleDetailChange={handleDetailChange}
          addDetailRow={addDetailRow}
          removeDetailRow={removeDetailRow}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
        />
        {/* <PolicyNotice /> */}
      </div>
      <div className="w-full mx-auto mt-6">
        <StaffAccountsList />
      </div>
    </div>
  );
}
