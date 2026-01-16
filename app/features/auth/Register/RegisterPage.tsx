import UserFooter from "~/components/user/UserFooter";
import UserHeader from "~/components/user/UserHeader";
import UserTopBar from "~/components/user/UserTopBar";
import RegisterForm from "~/features/auth/Register/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <UserTopBar />
      <UserHeader />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <RegisterForm />
      </div>
      <UserFooter />
    </>
  );
}
