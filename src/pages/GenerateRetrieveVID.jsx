import React from "react";
import { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import FAQSection from "../components/FAQ";
import BehaviourData from "proofify-data";
const GenerateRetrieveVID = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}

      {/* Breadcrumb */}
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto px-6 text-sm">
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>{" "}
          / Generate/Retrieve VID
        </div>
      </div>
    
      {/* Main Section */}
      <main className="container mx-auto py-8 px-6 flex flex-wrap justify-around">
        <div className="bg-white shadow rounded-md p-6 w-1/2">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Generate/Retrieve VID
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter the details below to generate or retrieve your Virtual ID
            (VID). Make sure your Aadhaar details are correct.
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
                placeholder="Enter your Aadhaar number"
              />
            </div>

            {/* Action: Generate or Retrieve */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What would you like to do?
              </label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="action"
                    value="generate"
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Generate Virtual ID (VID)
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="action"
                    value="retrieve"
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Retrieve Virtual ID (VID)
                  </span>
                </label>
              </div>
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

export default GenerateRetrieveVID;
