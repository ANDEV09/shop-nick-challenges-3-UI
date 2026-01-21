import { Facebook, Youtube } from "lucide-react";
import React from "react";

export default function UserTopBar() {
  return (
    <div className="py-3 px-4 flex justify-between bg-slate-50 items-center">
      <div className="px-4 max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
            <Facebook size={18} />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-600 text-sm">
            <Youtube size={18} />
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-semibold">
          <span>Hotline: 000000000 (9:00 - 22:00)</span>
        </div>
      </div>
    </div>
  );
}
