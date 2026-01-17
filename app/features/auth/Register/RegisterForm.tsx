"use client";
import * as z from "zod";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerSchema } from "~/schemas/registerSchema";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { useRegister } from "~/hooks/useRegister";

export default function RegisterForm() {
  const { handleRegister, isLoading } = useRegister();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof registerSchema>) {
    try {
      console.log("Register data:", data);
      await handleRegister(data);
    } catch (error) {
      console.error("Register error:", error);
    }
  }
  return (
    <Card className="w-full max-w-md mx-auto bg-white rounded-sm p-8 border border-gray-100 my-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-3xl font-bold text-blue-600 text-center">
          ĐĂNG KÝ
        </CardTitle>
        <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
        <CardDescription className="text-gray-600 text-center text-sm">
          Tạo tài khoản để sử dụng dịch vụ dễ dàng hơn
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <form
          method="POST"
          id="form-register"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit(onSubmit)();
          }}
          className="space-y-1"
        >
          <FieldGroup className="gap-2!">
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="username-input"
                    className="text-sm font-bold text-gray-800 flex items-center"
                  >
                    Tên tài khoản
                  </FieldLabel>
                  <Input
                    {...field}
                    id="username-input"
                    aria-invalid={fieldState.invalid}
                    placeholder="Nhập username của bạn"
                    autoComplete="username"
                    disabled={isLoading}
                    className="h-12 bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus-visible:ring-0 focus:border-blue-400 transition"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-red-500 text-xs"
                    />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="email-input"
                    className="text-sm font-bold text-gray-800 flex items-center"
                  >
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id="email-input"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Nhập email của bạn"
                    autoComplete="email"
                    disabled={isLoading}
                    className="h-12 bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus-visible:ring-0 focus:border-blue-400 transition"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-red-500 text-xs"
                    />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="password-input"
                    className="text-sm font-bold text-gray-800 flex items-center"
                  >
                    Mật khẩu
                  </FieldLabel>
                  <Input
                    {...field}
                    id="password-input"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Nhập mật khẩu"
                    autoComplete="new-password"
                    className="h-12 bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus-visible:ring-0 focus:border-blue-400 transition"
                    disabled={isLoading}
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-red-500 text-xs"
                    />
                  )}
                </Field>
              )}
            />
            <Controller
              name="confirm_password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="confirm-password-input"
                    className="text-sm font-bold text-gray-800 flex items-center"
                  >
                    Xác nhận mật khẩu
                  </FieldLabel>
                  <Input
                    {...field}
                    id="confirm-password-input"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Nhập lại mật khẩu"
                    autoComplete="new-password"
                    className="h-12 bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus-visible:ring-0 focus:border-blue-400 transition"
                    disabled={isLoading}
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-red-500 text-xs"
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 px-0">
        <div className="flex gap-3 w-full">
          <Button
            type="submit"
            form="form-register"
            disabled={isLoading}
            className="flex-1 h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-lg shadow transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Đang xử lý..." : "Đăng Ký"}
          </Button>
          <Button
            type="reset"
            onClick={() => form.reset()}
            disabled={isLoading}
            className="px-6 h-10 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-base rounded-lg transition disabled:opacity-50"
          >
            Reset
          </Button>
        </div>

        <div className="text-center text-sm">
          <span className="text-gray-600">Đã có tài khoản? </span>
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-700 font-bold"
          >
            Đăng nhập ngay
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
