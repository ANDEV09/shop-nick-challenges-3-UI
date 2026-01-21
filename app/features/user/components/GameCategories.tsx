import { useEffect } from "react";
import { useAccountsStore } from "~/store/useAccountsStore";
import GameGroups from "./GameGroups";

export default function GameCategories() {
  const { categories, isLoading, fetchCategories } = useAccountsStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <>
      {categories.map((category) => (
        <div key={category.id} className="mb-12">
          <div className="text-center mb-8 mt-8">
            <h2 className="text-2xl font-bold text-blue-700 uppercase mb-2">
              {category.name}
            </h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full"></div>
          </div>
          <GameGroups categoryId={category.id} />
        </div>
      ))}
    </>
  );
}
