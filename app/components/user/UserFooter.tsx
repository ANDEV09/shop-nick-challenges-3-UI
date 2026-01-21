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
    <footer className="bg-slate-900 text-white z-10 mt-12">
      <div className=" bg-slate-900 -mt-2 absolute z-0"></div>
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
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
              <button
                className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center
             transition hover:-translate-y-0.5 hover:bg-blue-600"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </button>

              <button
                className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center
             transition hover:-translate-y-0.5 hover:bg-red-600"
                aria-label="Follow us on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </button>
              <button
                className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center
             transition hover:-translate-y-0.5 hover:bg-blue-500"
                aria-label="Follow us on Telegram"
              >
                <Send className="w-4 h-4" />
              </button>
              <button
                className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center
             transition hover:-translate-y-0.5 hover:bg-indigo-600"
                aria-label="Follow us on Messenger"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <button
                className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center
             transition hover:-translate-y-0.5 hover:bg-gray-700"
                aria-label="Follow us on TikTok"
              >
                <Music2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">
              <span className="inline-block">
                LIÊN KẾT NHANH
                <span className="block border-b-3 border-white/80 mt-1 w-12"></span>
              </span>
            </h3>

            <ul className="space-y-3">
              <li>
                <button className="footer-link">Trang Chủ</button>
              </li>
              <li>
                <button className="footer-link">Mua Tài Khoản</button>
              </li>
              <li>
                <button className="footer-link">Dịch Vụ Game</button>
              </li>
              <li>
                <button className="footer-link">Vòng Quay May Mắn</button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">
              <span className="inline-block">
                HỖ TRỢ KHÁCH HÀNG
                <span className="block border-b-3 border-white/80 mt-1 w-12"></span>
              </span>
            </h3>
            <ul className="space-y-3">
              <li>
                <button className="footer-link">Hướng Dẫn Mua Hàng</button>
              </li>
              <li>
                <button className="footer-link">Chính Sách Bảo Mật</button>
              </li>
              <li>
                <button className="footer-link">Điều Khoản Sử Dụng</button>
              </li>
              <li>
                <button className="footer-link">Liên Hệ</button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4 text-white">
              <span className="inline-block">
                THÔNG TIN LIÊN HỆ
                <span className="block border-b-3 border-white/80 mt-1 w-12"></span>
              </span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 ">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gray-200 " />
                </div>
                <a href="tel:000000000 " className="text-sm">
                  Hotline: 000000000
                </a>
              </li>

              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-gray-200" />
                </div>
                <a href="mailto:meoroblux@gmail.com" className="text-sm">
                  Email: meoroblux@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4 text-gray-200" />
                </div>
                <a
                  href="https://zalo.me/0332345643"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  Zalo: 0332.345.643
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gray-200" />
                </div>
                <span className="text-sm">Địa chỉ: TPHCM, Việt Nam</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-gray-200" />
                </div>
                <span className="text-sm">Giờ làm việc: 9:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-gray-400 text-sm">
            © 2026 - Bản quyền thuộc về{" "}
            <a
              href="https://tuanori.vn"
              className="text-pink-400 hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              TUANORI.VN
            </a>{" "}
            - Thiết kế bởi{" "}
            <a
              href="https://tuanori.vn"
              className="text-pink-400 hover:underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Phạm Hoàng Tuấn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
