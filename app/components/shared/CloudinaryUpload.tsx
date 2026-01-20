import React from "react";
import { uploadToCloudinary } from "~/lib/cloudinary-upload";

interface CloudinaryUploadProps {
  label?: string;
  multiple?: boolean;
  value: string | string[];
  onChange: (urls: string[]) => void;
  uploadPreset: string;
  cloudName: string;
  className?: string;
}

export const CloudinaryUpload: React.FC<CloudinaryUploadProps> = ({
  label,
  multiple = false,
  value,
  onChange,
  uploadPreset,
  cloudName,
  className = "",
}) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="file"
        accept="image/*"
        multiple={multiple}
        onChange={async (e) => {
          const files = e.target.files;
          if (!files || files.length === 0) return;
          const urls = await uploadToCloudinary(files, uploadPreset, cloudName);
          if (urls.length > 0) {
            onChange(urls);
          }
        }}
        className={
          className ||
          "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        }
      />
      <div className="flex flex-wrap gap-2 mt-2">
        {Array.isArray(value)
          ? value.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`img-${idx}`}
                className="h-16 w-16 object-cover rounded"
              />
            ))
          : value && (
              <img
                src={value as string}
                alt="thumb"
                className="h-10 w-10 object-cover rounded"
              />
            )}
      </div>
    </div>
  );
};
