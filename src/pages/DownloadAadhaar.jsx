import React, { useState } from "react";

const DownloadAadhaar = () => {
  const [selectedOption, setSelectedOption] = useState("aadhaar");

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
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb */}
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto px-6 text-sm">
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>{" "}
          / Download Aadhaar
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-100 border-l-4 m-5 border-yellow-500 text-yellow-700 p-4 mb-6 rounded-md">
        <p className="font-medium text-center">
          ⚠️ Disclaimer: This site is an independent platform created for
          analyzing behavioral patterns. It is not affiliated with or endorsed
          by the Government of India or UIDAI. We do not collect, store, or
          process any personal or sensitive Aadhaar-related information.
        </p>
      </div>

      {/* Main Section */}
      <main className="container mx-auto py-8 px-6">
        <div className="bg-white shadow rounded-md p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Download Aadhaar
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Please select an option and provide the required details to proceed.
          </p>

          {/* Radio Buttons */}
          <div className="mb-6">
            <fieldset>
              <legend className="text-sm font-medium text-gray-700">
                Select an Option
              </legend>
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
                    name="downloadOption"
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
                    name="downloadOption"
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
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Download Aadhaar
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default DownloadAadhaar;
