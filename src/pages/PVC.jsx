import React from "react";

const OrderPVC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     

      {/* Breadcrumb */}
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto px-6 text-sm">
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>{" "}
          / Order Aadhaar PVC Card
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
      
        <div className="bg-white shadow rounded-md p-6 max-w-lg mx-auto">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Order Aadhaar PVC Card
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter your Aadhaar or Enrollment ID to order your Aadhaar PVC Card.
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Aadhaar/Enrollment ID */}
            <div>
              <label
                htmlFor="aadhaarOrEnrolmentId"
                className="block text-sm font-medium text-gray-700"
              >
                Aadhaar Number / Enrollment ID
              </label>
              <input
                type="text"
                id="aadhaarOrEnrolmentId"
                name="aadhaarOrEnrolmentId"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
                placeholder="Enter Aadhaar or Enrollment ID"
              />
            </div>

            
            

            {/* OTP Verification */}
            <div>
              <button
                type="button"
                className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send OTP
              </button>
            </div>

            {/* OTP Input */}
            <div className="mt-6 space-y-4">
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700"
              >
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
                placeholder="Enter OTP"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default OrderPVC;
