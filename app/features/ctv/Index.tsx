import { useState } from "react";
import { Outlet } from "react-router";
import StaffHeader from "~/features/ctv/components/StaffHeader";
import StaffSidebar from "~/features/ctv/components/StaffSidebar";

export default function CtvPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      <StaffSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <StaffHeader />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
