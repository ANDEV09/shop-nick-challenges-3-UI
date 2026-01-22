import { Outlet } from "react-router";
import AdminHeader from "~/features/admin/components/AdminHeader";
import AdminSidebar from "~/features/admin/components/AdminSidebar";

export default function AdminPage() {
  return (
    <div className="relative h-screen bg-gray-100">
      <AdminSidebar />
      <div className="transition-all duration-300 h-full flex flex-col ml-64">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
