import React from "react";
import { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import FAQSection from "../components/FAQ";
import BehaviourData from "proofify-data";
const CheckStatus = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto px-6 text-sm">
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>{" "}
          / Check Aadhaar Status
        </div>
      </div>
     

      {/* Main Section */}
      <main className="container mx-auto py-8 px-6 flex flex-wrap">
        <div className="bg-white shadow rounded-md p-6 max-w-lg mx-auto w-1/2">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Check Aadhaar Status
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter your Enrollment ID and captcha to check the status of your
            Aadhaar.
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Enrollment ID */}
            <div>
              <label
                htmlFor="enrollmentId"
                className="block text-sm font-medium text-gray-700"
              >
                Enrollment ID
              </label>
              <input
                type="text"
                id="enrollmentId"
                name="enrollmentId"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
                placeholder="Enter Enrollment ID"
              />
            </div>

            {/* Submit Button */}
            <div>
                <BehaviourData/>
            </div>
          </form>
        </div>
        <FAQSection/>
      </main>

      {/* Footer */}

    </div>
  );
};

export default CheckStatus;
