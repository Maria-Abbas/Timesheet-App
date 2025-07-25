import LoginForm from "../../components/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen">
      <section className="flex-1 flex items-center justify-center p-12 bg-white">
        <LoginForm />
      </section>

      <section className="flex-1 bg-blue-700 text-white flex flex-col justify-center px-16">
        <h1 className="text-4xl font-bold mb-4 max-w-md text-left">
          Welcome Back!
        </h1>
        <p className="text-lg max-w-md text-left">
          Access your dashboard and manage your account securely.
        </p>
      </section>
    </main>
  );
}
