import React from "react";

const GrievanceFeedback = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     
     

      {/* Breadcrumb */}
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto px-6 text-sm">
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>{" "}
          / Grievance Feedback
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
            Submit Grievance Feedback
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Please provide your details and feedback about Aadhaar services.
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
                placeholder="Enter your email"
              />
            </div>

            {/* Feedback */}
            <div>
              <label
                htmlFor="feedback"
                className="block text-sm font-medium text-gray-700"
              >
                Feedback/Grievance
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
                placeholder="Describe your feedback or grievance"
              ></textarea>
            </div>

            {/* File Upload */}
            <div>
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Supporting Documents (Optional)
              </label>
              <input
                type="file"
                id="file"
                name="file"
                className="mt-1 block w-full text-sm text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </main>

     
    </div>
  );
};

export default GrievanceFeedback;
