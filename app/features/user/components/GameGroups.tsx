import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAccountsStore } from "~/store/useAccountsStore";

interface GameGroupsProps {
  categoryId: string;
}

export default function GameGroups({ categoryId }: GameGroupsProps) {
  const { groups, isLoading, fetchGroupsByCategory } = useAccountsStore();
  const navigate = useNavigate();

  const categoryGroups = groups[categoryId] || [];

  useEffect(() => {
    fetchGroupsByCategory(categoryId);
  }, [categoryId, fetchGroupsByCategory]);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categoryGroups.map((group) => (
        <div
          key={group.id}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        >
          <div className="relative">
            <img
              src={
                group.thumbnail ||
                "https://meoroblox.com/storage/config/1746807379_d93b987255372da1b9eb977de51f7550.png"
              }
              alt={group.title}
              className="w-full h-44 object-cover"
            />
          </div>

          <div className="p-4">
            <h3 className="text-sm font-bold text-blue-900 text-center mb-3 uppercase">
              {group.title}
            </h3>

            <div className="flex justify-center gap-2 mb-4">
              <span className="bg-[#2563eb] text-white text-xs font-medium px-3 py-1.5 rounded-full">
                90 tài khoản
              </span>
              <span className="bg-[#2563eb] text-white text-xs font-medium px-3 py-1.5 rounded-full">
                Đã bán: 50
              </span>
            </div>

            <button
              onClick={() => navigate(`/group-accounts/${group.id}`)}
              className="w-full border-2 border-blue-700 text-blue-700 font-semibold py-2 rounded-full hover:bg-blue-700 hover:text-white transition-colors uppercase text-sm"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
