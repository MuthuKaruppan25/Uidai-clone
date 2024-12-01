import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      
      {/* Container */}
      <div className="w-full max-w-md bg-white shadow-md rounded-md p-8">
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded-md w-full max-w-2xl">
        <p className="font-medium">
          ⚠️ Disclaimer: This site is an independent platform created for analyzing behavioral patterns. 
          It is not affiliated with or endorsed by the Government of India or UIDAI. 
          We do not collect, store, or process any personal or sensitive Aadhaar-related information.
        </p>
      </div>
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Resident Login
        </h1>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
              placeholder="Enter your username"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
              placeholder="Enter your password"
            />
          </div>
                 {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center text-sm text-gray-600 space-y-2">
          <a href="/forgot-password" className="hover:underline text-blue-600">
            Forgot Password?
          </a>
          <br />
          <a href="/register" className="hover:underline text-blue-600">
            New User? Register Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
