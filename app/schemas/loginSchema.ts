import * as z from "zod";
const loginSchema = z.object({
  username: z
    .string()
    .min(5, "Username phải có ít nhất 5 ký tự.")
    .max(32, "Username không được vượt quá 32 ký tự."),
  password: z
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự.")
    .max(50, "Mật khẩu không được vượt quá 50 ký tự."),
});

export { loginSchema };
