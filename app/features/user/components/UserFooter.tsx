import {
  Facebook,
  Youtube,
  Send,
  MessageCircle,
  Music2,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1f3c] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="https://meoroblox.com/storage/config/1746807379_d93b987255372da1b9eb977de51f7550.png"
                alt="MeoRoblox Logo"
                className="h-16 object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Shop Meoroblox cung cấp tài khoản roblox chính hãng, giá tốt nhất
              thị trường. Giao dịch an toàn, nhanh chóng và bảo mật
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 bg-[#2a3156] rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#2a3156] rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#2a3156] rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#2a3156] rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#2a3156] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Music2 className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              LIÊN KẾT NHANH
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-yellow-400">{">"}</span> Trang Chủ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-yellow-400">{">"}</span> Mua Tài Khoản
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-yellow-400">{">"}</span> Dịch Vụ Game
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-yellow-400">{">"}</span> Vòng Quay May
                  Mắn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              HỖ TRỢ KHÁCH HÀNG
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-yellow-400">{">"}</span> Hướng Dẫn Mua
                  Hàng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-yellow-400">{">"}</span> Chính Sách Bảo
                  Mật
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-yellow-400">{">"}</span> Điều Khoản Sử
                  Dụng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-yellow-400">{">"}</span> Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              THÔNG TIN LIÊN HỆ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#1a1f3c]" />
                </div>
                <span>Hotline: 000000000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#1a1f3c]" />
                </div>
                <span>Email: meoroblux@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-[#1a1f3c]" />
                </div>
                <span>Zalo: 0332.345.643</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#1a1f3c]" />
                </div>
                <span>Địa chỉ: TPHCM, Việt Nam</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#1a1f3c]" />
                </div>
                <span>Giờ làm việc: 9:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-gray-400 text-sm">
            © 2026 - Bản quyền thuộc về{" "}
            <a
              href="#"
              className="text-yellow-400 hover:underline font-semibold"
            >
              MEOROBLOX.COM
            </a>{" "}
            - Thiết kế bởi{" "}
            <a href="#" className="text-pink-500 hover:underline font-semibold">
              TUANORI.VN
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
