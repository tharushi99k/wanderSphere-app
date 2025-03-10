"use client"
import { useState } from "react";
import Link from "next/link";

const Registerform = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Register button clicked (No backend yet)");
  };

  const handleGoogleRegister = () => {
    alert("Google Sign-Up clicked (No backend yet)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FBFFF5] p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>

        
        <input
          className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

      
        <input
          className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

   
        <input
          className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

  
        <button
          className="bg-green-500 text-white px-4 py-2 w-full rounded hover:bg-green-600 transition"
          onClick={handleRegister}
        >
          Sign Up
        </button>


        <div className="flex items-center my-4">
          <div className="border-b w-full"></div>
          <span className="px-2 text-gray-500">or</span>
          <div className="border-b w-full"></div>
        </div>

        {/* <button
          className="bg-red-500 text-white px-4 py-2 w-full rounded flex items-center justify-center gap-2 hover:bg-red-600 transition"
          onClick={handleGoogleRegister}
        >
          <span>🔵</span> Sign up with Google
        </button> */}

        {/* Login Link */}
        <p className="mt-4 text-center">
          Already have an account?
          <Link href="/login" className="text-blue-500 ml-1 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registerform;
