import LoginForm from "../../components/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      {/* <section className="flex-1 flex items-center justify-center p-12 bg-white">
        <LoginForm />
      </section> */}
      <section className="flex-1 flex flex-col p-12 bg-white">
        <div className="flex-grow flex flex-col justify-center items-center">
          <LoginForm />
        </div>
        <p className="text-center text-gray-500 text-sm mt-6">
          © 2024 tentwenty
        </p>
      </section>

      <section className="flex-1 bg-blue-700 text-white flex flex-col justify-center px-8 md:px-16 py-12 md:py-0">
        <h1 className="text-4xl font-bold mb-4 max-w-md text-left">ticktock</h1>
        <p className="text-lg max-w-lg text-left">
          Introducing ticktock, our cutting-edge timesheet web application
          designed to revolutionize how you manage employee work hours. With
          ticktock, you can effortlessly track and monitor employee attendance
          and productivity from anywhere, anytime, using any internet-connected
          device.
        </p>
      </section>
    </main>
  );
}
