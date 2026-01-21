import type React from "react";
import { useState } from "react";
import {
  Menu,
  Home,
  BarChart3,
  Users,
  FileText,
  Settings,
  Lock,
  AlertCircle,
  CreditCard,
  Notebook as LogBook,
  MessageSquare,
  LogOut,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
interface MenuItemProps {
  icon: React.ElementType;
  label: string;
  hasArrow?: boolean;
  badge?: string | null;
  onClick?: () => void;
  isOpen?: boolean;
  children?: React.ReactNode;
}
const MenuItem = ({
  icon: Icon,
  label,
  hasArrow = false,
  badge = null,
  onClick,
  isOpen,
  children,
}: MenuItemProps) => (
  <>
    <div
      onClick={onClick}
      className="hover:bg-black-700 flex cursor-pointer items-center justify-between rounded-md px-4 py-3 text-gray-300 transition"
    >
      <div className="flex items-center gap-3">
        <Icon size={18} />
        <span className="text-sm">{label}</span>
      </div>
      {badge && (
        <span className="rounded-full bg-blue-500 px-2 py-1 text-xs text-white">
          {badge}
        </span>
      )}
      {hasArrow &&
        (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
    </div>
    {isOpen && children && <div className="ml-4">{children}</div>}
  </>
);

const SubMenuItem = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    className="hover:bg-black-700 cursor-pointer rounded-md px-4 py-2 text-sm text-gray-400 transition hover:text-white"
  >
    {label}
  </div>
);

interface CtvSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
}

export default function CtvSidebar({
  sidebarOpen,
  setSidebarOpen,
  setCurrentPage,
}: CtvSidebarProps) {
  const [gameMenuOpen, setGameMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`${sidebarOpen ? "w-65" : "w-20"} flex flex-col overflow-y-auto bg-[#19244A] text-white transition-all duration-300`}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-white">
            <BarChart3 size={18} className="text-blue-900" />
          </div>
        </div>
        <Menu
          size={20}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="cursor-pointer"
        />
      </div>
      <div className="p-4">
        <div className="mb-3 text-xs font-bold text-blue-300">MAIN</div>
        <MenuItem
          icon={Home}
          label="Bảng Điều Khiển"
          onClick={() => navigate("/staff")}
        />
      </div>
      <div className="p-4">
        <div className="mb-3 text-xs font-bold text-blue-300">Staff Menu</div>
        <MenuItem
          icon={Users}
          label="Bán Nick Game"
          hasArrow
          isOpen={gameMenuOpen}
          onClick={() => setGameMenuOpen(!gameMenuOpen)}
        >
          <SubMenuItem
            label="Danh mục game"
            onClick={() => navigate("/staff/game-categories")}
          />
          <SubMenuItem
            label="Lịch sử nick đã bán"
            onClick={() => navigate("/staff/purchase-history")}
          />
        </MenuItem>
      </div>
      <div className="flex-1"></div>
      <div className="border-t border-blue-800 p-4">
        <MenuItem
          icon={LogOut}
          label="Quay về trang chủ"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}
