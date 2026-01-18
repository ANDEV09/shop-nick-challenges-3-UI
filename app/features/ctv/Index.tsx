import { useState } from "react";
import StaffHeader from "~/features/ctv/components/StaffHeader";
import StaffSidebar from "~/features/ctv/components/StaffSidebar";
import StaffDashboard from "~/features/ctv/components/StaffDashboard";

export default function CtvPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      <StaffSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <StaffHeader />
        <StaffDashboard />
      </div>
    </div>
  );
}
