import BehaviourData from "proofify-data";
import React from "react";
import { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Login = () => {
 
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Container */}
      <div className="w-full max-w-md bg-white shadow-md rounded-md p-8">
       
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
         Login
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
              <BehaviourData/>
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
