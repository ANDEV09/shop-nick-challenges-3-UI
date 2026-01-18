import { Search, Bell, Settings, Home, Moon, Maximize2 } from "lucide-react";

export default function StaffHeader() {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4 shadow-sm">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          ĐĂNG BÁN NICK GAME
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <Home
          className="cursor-pointer text-gray-400 hover:text-gray-600"
          size={20}
        />
        <Moon
          className="cursor-pointer text-gray-400 hover:text-gray-600"
          size={20}
        />
        <Maximize2
          className="cursor-pointer text-gray-400 hover:text-gray-600"
          size={20}
        />
        <Bell
          className="cursor-pointer text-gray-400 hover:text-gray-600"
          size={20}
        />
        <span className="text-xs text-gray-500">Web Developer</span>
        <Settings
          className="cursor-pointer text-gray-400 hover:text-gray-600"
          size={20}
        />
      </div>
    </div>
  );
}
