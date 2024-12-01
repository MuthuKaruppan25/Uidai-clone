import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      {/* Disclaimer Alert */}
      <div className="bg-yellow-100 border-l-4 m-5 border-yellow-500 text-yellow-700 p-4 mb-6 rounded-md ">
  <p className="font-medium text-center">
    ⚠️ Disclaimer: This site is an independent platform created for analyzing behavioral patterns. 
    It is not affiliated with or endorsed by the Government of India or UIDAI. 
    We do not collect, store, or process any personal or sensitive Aadhaar-related information.
  </p>
</div>

      {/* Main Content */}
      <h1 className="text-3xl font-bold text-blue-600">Welcome to Behavioral Analysis Platform</h1>
      <p className="mt-4 text-lg text-gray-700 text-center">
        This platform simulates various functionalities to analyze user behavior for educational and research purposes.
      </p>
    </div>
  );
};

export default Home;
