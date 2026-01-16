import React from "react";
import UserFooter from "~/components/user/UserFooter";
import UserHeader from "~/components/user/UserHeader";
import UserTopBar from "~/components/user/UserTopBar";
import LoginForm from "~/features/auth/Login/LoginForm";

export default function LoginPage() {
  return (
    <>
      <UserTopBar />
      <UserHeader />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <LoginForm />
      </div>
      <UserFooter />
    </>
  );
}
