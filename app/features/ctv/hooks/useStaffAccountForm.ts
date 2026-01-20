import { useState } from "react";
import { privateApi } from "~/lib/axios-instance";
import { toast } from "sonner";

export function useStaffAccountForm(groupId: string | null) {
  const [formData, setFormData] = useState<{
    accountName: string;
    password: string;
    price: string;
    description: string;
    thumb: string;
    images: string[];
    details: { key: string; value: string }[];
  }>({
    accountName: "",
    password: "",
    price: "",
    description: "",
    thumb: "",
    images: [],
    details: [{ key: "", value: "" }],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDetailChange = (
    idx: number,
    field: "key" | "value",
    value: string,
  ) => {
    setFormData((prev) => {
      const details = [...prev.details];
      details[idx][field] = value;
      return { ...prev, details };
    });
  };

  const addDetailRow = () => {
    setFormData((prev) => ({
      ...prev,
      details: [...prev.details, { key: "", value: "" }],
    }));
  };

  const removeDetailRow = (idx: number) => {
    setFormData((prev) => {
      const details = prev.details.filter((_, i) => i !== idx);
      return { ...prev, details };
    });
  };

  const handleReset = () => {
    setFormData({
      accountName: "",
      password: "",
      price: "",
      description: "",
      thumb: "",
      images: [],
      details: [{ key: "", value: "" }],
    });
  };

  const handleSubmit = async () => {
    if (!groupId) {
      toast.error("Thiếu groupId, không thể thêm tài khoản!", {
        position: "bottom-right",
      });
      return;
    }
    const detailsObj: Record<string, string | number> = {};
    formData.details.forEach((d) => {
      if (d.key)
        detailsObj[d.key] = isNaN(Number(d.value)) ? d.value : Number(d.value);
    });
    const submitData = {
      accountName: formData.accountName,
      password: formData.password,
      price: Number(formData.price),
      details: detailsObj,
      description: formData.description,
      thumb: formData.thumb,
      images: formData.images.filter((img) => img),
    };
    try {
      await privateApi.post(`/game-accounts/${groupId}/account`, submitData);
      toast.success("Đăng tài khoản thành công vui lòng chờ admin duyệt!", {
        position: "bottom-right",
      });
      handleReset();
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "Có lỗi khi đăng tài khoản!",
        { position: "bottom-right" },
      );
    }
  };

  return {
    formData,
    setFormData,
    handleInputChange,
    handleDetailChange,
    addDetailRow,
    removeDetailRow,
    handleSubmit,
    handleReset,
  };
}
