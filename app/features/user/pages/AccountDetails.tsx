"use client";

import { CreditCard, Landmark, ShoppingCart } from "lucide-react";
import { useState } from "react";
import UserFooter from "~/components/user/UserFooter";
import UserHeader from "~/components/user/UserHeader";
import UserTopBar from "~/components/user/UserTopBar";

export default function AccountDetails() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const accountDetail = {
    id: 176,
    price: 10,
    details: { tuong: 100, trang_phuc: 50 },
    description: "nick cùi",
    thumb:
      "https://meoroblox.com/storage/accounts/images/1767797803_a21ac3bbcd996b351c2273198703a3ce.png",
    images: [
      "https://meoroblox.com/storage/accounts/images/1767797803_a21ac3bbcd996b351c2273198703a3ce.png",
      "https://meoroblox.com/storage/accounts/thumbnails/1767504526_6c899196445a9ee450dc67ab546cfdbb.png",
      "https://meoroblox.com/storage/accounts/images/1767797803_a21ac3bbcd996b351c2273198703a3ce.png",
      "https://meoroblox.com/storage/accounts/images/1767797803_a21ac3bbcd996b351c2273198703a3ce.png",
      "https://meoroblox.com/storage/accounts/thumbnails/1767504526_6c899196445a9ee450dc67ab546cfdbb.png",
      "https://meoroblox.com/storage/accounts/images/1767797803_a21ac3bbcd996b351c2273198703a3ce.png",
      "https://meoroblox.com/storage/accounts/images/1767797803_a21ac3bbcd996b351c2273198703a3ce.png",
      "https://meoroblox.com/storage/accounts/thumbnails/1767504526_6c899196445a9ee450dc67ab546cfdbb.png",
      "https://meoroblox.com/storage/accounts/images/1767797803_a21ac3bbcd996b351c2273198703a3ce.png",
    ],
  };
  return (
    <>
      <UserTopBar />
      <UserHeader />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg p-8">
          <div className="flex gap-4 justify-center mb-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-700 transition shadow-md">
              <ShoppingCart className="w-5 h-5" />
              MUA NGAY
            </button>
            <button className="border-2 border-gray-800 text-gray-800 px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-50 transition">
              <CreditCard className="w-5 h-5" />
              NẠP THẺ
            </button>
            <button className="border-2 border-gray-800 text-gray-800 px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-50 transition">
              <Landmark className="w-5 h-5" />
              NẠP ATM
            </button>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-300 p-4 mb-8 rounded">
            <p className="text-gray-700">
              <span className="font-bold text-gray-800">Mô tả:</span>{" "}
              {accountDetail.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <div className="rounded-lg border-2 border-gray-300 overflow-hidden bg-gray-200">
                  <img
                    src={
                      accountDetail.images[selectedImageIndex] ||
                      accountDetail.thumb
                    }
                    alt={`Account Image ${accountDetail.id}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-700 mb-2">
                  Hình ảnh chi tiết:
                </p>
                <div className="grid grid-cols-3 gap-1">
                  {accountDetail.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`rounded border overflow-hidden aspect-video cursor-pointer transition ${
                        selectedImageIndex === index
                          ? "border-2 border-blue-600"
                          : "border border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Detail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  Thông tin tài khoản
                </h3>

                <div className="mb-4 pb-4 border-b border-gray-300">
                  <p className="text-xs text-gray-600 font-medium mb-1">Giá</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {accountDetail.price} ₫
                  </p>
                </div>
                <div className="space-y-2">
                  {Object.entries(accountDetail.details).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center py-2 px-2 border-b border-gray-200 last:border-b-0 text-sm"
                    >
                      <span className="text-gray-700 font-medium capitalize">
                        {key.replace(/_/g, " ")}
                      </span>
                      <span className="text-gray-900 font-bold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserFooter />
    </>
  );
}
