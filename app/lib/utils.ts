import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (amount: string | number): string => {
  const num = typeof amount === "string" ? parseInt(amount, 10) : amount;
  return num.toLocaleString("vi-VN") + " VND";
};
