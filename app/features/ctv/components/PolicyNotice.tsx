export default function PolicyNotice() {
  return (
    <div className="rounded-sm border border-blue-100 bg-white shadow-sm">
      <div className="border-b border-blue-100 px-6 py-4 flex items-center gap-2">
        <div className="h-8 w-1 rounded-full bg-blue-500" aria-hidden />
        <div>
          <h2 className="text-xl uppercase tracking-wide text-blue-500 font-semibold">
            Chính Sách Đăng Bán Nick
          </h2>
        </div>
      </div>
      <div className="px-6 py-5 text-base text-gray-700 leading-6 space-y-2">
        <p className="font-semibold text-red-600 text-lg">
          Vui lòng đọc kỹ và tuân thủ các chính sách dưới đây khi tham gia bán
          nick game trên hệ thống của chúng tôi:
        </p>
        <ul className="list-disc pl-5 space-y-1 font-semibold">
          <li>Thông tin nick phải chính xác, đầy đủ và không được sai lệch.</li>
          <li>
            Những hành vi cố ý spam phá hoại hệ thống sẽ bị khóa vĩnh viễn.
          </li>
          <li>
            Nick sau khi đã được duyệt admin sẽ tạm giữ quyền truy cập đến khi
            giao dịch hoàn tất.
          </li>
          <li>
            Trong quá trình đăng bán có thể hủy đăng bán để nhận lại nick (chưa được ai mua).
          </li>
          <li>Mọi thắc mắc vui lòng liên hệ Admin qua zalo 0983699292</li>
        </ul>
      </div>
    </div>
  );
}
