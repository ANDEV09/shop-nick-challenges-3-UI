import { useState } from "react";
import AdminDashboard from "~/features/admin/components/AdminDashboard";
import AdminHeader from "~/features/admin/components/AdminHeader";
import AdminSidebar from "~/features/admin/components/AdminSidebar";

export default function CtvPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <AdminHeader />
        <AdminDashboard />
      </div>
    </div>
  );
}
