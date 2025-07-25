"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  function validateForm() {
    let valid = true;
    setEmailError("");
    setPasswordError("");
    setError("");

    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    }
    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    }
    return valid;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const res = await signIn("credentials", {
      redirect: true,
      callbackUrl: "/dashboard",
      email: email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-6"
      noValidate
    >
      <h2 className="text-3xl font-semibold mb-8">Sign in to your account</h2>

      {/* Email field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            emailError ? "border-red-500" : "border-gray-300"
          }`}
        />
        {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}
      </div>

      {/* Password field */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            passwordError ? "border-red-500" : "border-gray-300"
          }`}
        />
        {passwordError && (
          <p className="text-red-600 text-sm mt-1">{passwordError}</p>
        )}
      </div>

      {/* Remember Me */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="remember"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="remember" className="text-sm">
          Remember me
        </label>
      </div>

      {/* Global Error message */}
      {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

      {/* Submit button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded text-white transition ${
          loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}
