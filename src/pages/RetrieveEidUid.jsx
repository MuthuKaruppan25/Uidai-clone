import React from "react";
import { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import FAQSection from "../components/FAQ";
import BehaviourData from "proofify-data";

const RetrieveEidUid = () => {
 
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb */}
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto px-6 text-sm">
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>{" "}
          / Retrieve EID/UID
        </div>
      </div>

      

      {/* Main Section */}
      <main className="container mx-auto py-8 px-6 flex flex-wrap justify-around">
        <div className="bg-white shadow rounded-md p-6 w-1/2">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Retrieve EID/UID
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter the required details to retrieve your Enrollment ID (EID) or
            Unique ID (UID). Ensure that the details match your Aadhaar record.
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
                placeholder="Enter your full name"
              />
            </div>

            {/* Registered Mobile or Email */}
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                Registered Mobile or Email
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
                placeholder="Enter registered mobile or email"
              />
            </div>

            {/* Options for Retrieval */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What do you want to retrieve?
              </label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="retrieveOption"
                    value="eid"
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Enrollment ID (EID)
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="retrieveOption"
                    value="uid"
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Aadhaar Number (UID)
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

   
    </div>
  );
};

export default RetrieveEidUid;
