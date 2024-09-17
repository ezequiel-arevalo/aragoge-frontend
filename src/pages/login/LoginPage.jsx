import { LoginForm } from "./components/LoginForm";

const LoginPage = () => {
  return (
    <section className="mx-auto text-center p-4">
      <h2 className="text-h2 font-semibold font-title py-4">Login Page</h2>
      <LoginForm />
    </section>
  );
};

export default LoginPage;