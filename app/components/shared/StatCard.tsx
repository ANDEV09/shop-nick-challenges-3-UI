import { formatCurrency } from "~/lib/utils";

interface StatCardProps {
  value: string | number;
  label: string;
  bgColor?: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-white rounded-sm border border-gray-200 p-6 text-center">
      <div className="mb-2 text-2xl font-semibold text-red-700">
        {formatCurrency(value)}
      </div>
      <div className="text-md text-gray-600 font-bold ">{label}</div>
    </div>
  );
}
