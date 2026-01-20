import StatCard from "~/components/shared/StatCard";

export default function StaffDashboard() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <h1 className="mb-4 text-3xl font-bold text-gray-800">
        Thống Kê Tài Khoản CTV
      </h1>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard value="138000" label="Số dư hiện tại" />
        <StatCard value="363000" label="Đã rút" />
      </div>

      <h1 className="mb-4 text-3xl font-bold text-gray-800">
        Thống Kê Đơn Nick
      </h1>
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard value="10" label="Nick đang bán" />
        <StatCard value="1" label="Nick đã bán" />
        <StatCard value="10000" label="Tổng doanh thu" />
        <StatCard value="1" label="Doanh thu chờ" />
      </div>
    </div>
  );
}
