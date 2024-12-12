import React, { useState } from "react";
import { useEffect, useRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import FAQSection from "../components/FAQ";
import BehaviourData from "proofify-data";
const DownloadAadhaar = () => {
  const [selectedOption,setSelectedOption] = useState("aadhaar");
  const renderForm = () => {
    switch (selectedOption) {
      case "aadhaar":
        return (
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
        );
      case "enrolment":
        return (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="enrolmentId"
                className="block text-sm font-medium text-gray-700"
              >
                Enrolment ID
              </label>
              <input
                type="text"
                id="enrolmentId"
                name="enrolmentId"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
                placeholder="Enter your Enrolment ID"
              />
            </div>
            <div>
              <label
                htmlFor="eidDate"
                className="block text-sm font-medium text-gray-700"
              >
                Select EID Date
              </label>
              <input
                type="date"
                id="eidDate"
                name="eidDate"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="eidTime"
                className="block text-sm font-medium text-gray-700"
              >
                Select EID Time
              </label>
              <input
                type="time"
                id="eidTime"
                name="eidTime"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
              />
            </div>
          </div>
        );
      case "vid":
        return (
          <div>
            <label
              htmlFor="vid"
              className="block text-sm font-medium text-gray-700"
            >
              Virtual ID
            </label>
            <input
              type="text"
              id="vid"
              name="vid"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
              placeholder="Enter your Virtual ID"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className=" ">
        <div className="container mx-auto px-6 text-sm">
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>{" "}
          / Download Aadhaar
        </div>
      </div>

      {/* Disclaimer */}

      {/* Main Section */}
      <main className="container mx-auto py-8 px-6 flex justify-around">
        <div className="bg-white shadow shadow-gray-300 rounded-md p-6 w-1/2 ">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Select 12 digit Aadhaar Number /16 digit Virtual ID (VID) Number /
            28 digit Enrollment ID (EID) Number
          </h2>

          {/* Radio Buttons */}
          <div className="mb-6">
            <fieldset>
              <div className="flex text-center">
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="downloadOption"
                    value="aadhaar"
                    checked={selectedOption === "aadhaar"}
                    onChange={() => setSelectedOption("aadhaar")}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Aadhaar Number</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="downloadOption1"
                    value="enrolment"
                    checked={selectedOption === "enrolment"}
                    onChange={() => setSelectedOption("enrolment")}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Enrolment ID</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="downloadOption2"
                    value="vid"
                    checked={selectedOption === "vid"}
                    onChange={() => setSelectedOption("vid")}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Virtual ID</span>
                </label>
              </div>
            </fieldset>
          </div>

          {/* Dynamic Form */}
          <form className="space-y-6">
            {renderForm()}

            {/* Captcha */}

            {/* Submit Button */}
            <div>
                  
            </div>
          </form>
          <BehaviourData/>
        </div>
       <FAQSection/>
      </main>
    
    </div>
  );
};

export default DownloadAadhaar;
