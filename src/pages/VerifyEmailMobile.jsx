import React from "react";

const VerifyEmailMobile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     

      {/* Breadcrumb */}
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto px-6 text-sm">
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>{" "}
          / Verify Email/Mobile
        </div>
      </div>

      <div className="bg-yellow-100 border-l-4 m-5 border-yellow-500 text-yellow-700 p-4 mb-6 rounded-md ">
  <p className="font-medium text-center">
    ⚠️ Disclaimer: This site is an independent platform created for analyzing behavioral patterns. 
    It is not affiliated with or endorsed by the Government of India or UIDAI. 
    We do not collect, store, or process any personal or sensitive Aadhaar-related information.
  </p>
</div>

      {/* Main Section */}
      <main className="container mx-auto py-8 px-6">
     
        <div className="bg-white shadow rounded-md p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Verify Email/Mobile
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter your Aadhaar number and either email or mobile number to verify your details.
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

            {/* Email/Mobile */}
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                Registered Email or Mobile Number
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
                placeholder="Enter your registered email or mobile"
              />
            </div>

           

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Verify Now
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
    
    </div>
  );
};

export default VerifyEmailMobile;
