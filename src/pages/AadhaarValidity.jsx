import React from "react";
import { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import BehaviourData from "proofify-data";

const CheckAadhaarValidity = () => {

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb */}
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto px-6 text-sm">
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>{" "}
          / Check Aadhaar Validity
        </div>
      </div>
     

      {/* Main Section */}
      <main className="container mx-auto py-8 px-6">
        <div className="bg-white shadow rounded-md p-6 max-w-lg mx-auto">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Check Aadhaar Validity
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter your Aadhaar number and captcha to validate the Aadhaar.
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Aadhaar Number */}
            <div>
              <label
                htmlFor="aadhaarNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Aadhaar Number
              </label>
              <input
                type="text"
                id="aadhaarNumber"
                name="aadhaarNumber"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
                placeholder="Enter Aadhaar Number"
              />
            </div>

            {/* Submit Button */}

           
          </form>
          <div className="w-full mt-10">
          < BehaviourData/>
          </div>
          
        </div>
      
      </main>

      {/* Footer */}
    </div>
  );
};

export default CheckAadhaarValidity;
