"use client"
import { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    alert("Login button clicked (No backend yet)");
  };

  const handleGoogleLogin = () => {
    alert("Google Sign-In clicked (No backend yet)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FBFFF5] p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>


        <input
          className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />


        <input
          className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        <div className="text-right text-sm mb-4">
          <Link href="/auth/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </div>

 
        <button
          className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600 transition"
          onClick={handleLogin}
        >
          Login
        </button>


        <div className="flex items-center my-4">
          <div className="border-b w-full"></div>
          <span className="px-2 text-gray-500">or</span>
          <div className="border-b w-full"></div>
        </div>

     
        {/* <button
          className="bg-red-500 text-white px-4 py-2 w-full rounded flex items-center justify-center gap-2 hover:bg-red-600 transition"
          onClick={handleGoogleLogin}
        >
          <span>🔵</span> Sign in with Google
        </button> */}

        {/* Signup Link */}
        <p className="mt-4 text-center">
          Don&apos;t have an account?
          <Link href="/register" className="text-blue-500 ml-1 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
