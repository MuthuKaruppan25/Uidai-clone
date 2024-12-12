import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [

    {
      name: "Retrieve EID/UID",
      description: "Recover your Aadhaar or Enrolment ID.",
      link: "/retrieve-eid-uid",
      icon: "https://myaadhaar.uidai.gov.in/static/media/RetrieveUid.ffeea5c1bb4c542010e86c47d43da4f4.svg",
    },
    {
      name: "Verify Email/Mobile",
      description: "Validate your registered email or mobile.",
      link: "/verify-email-mobile",
      icon: "https://myaadhaar.uidai.gov.in/static/media/VerifyMobile.0d1ff55d011f30b3f22e8ba9ae37c932.svg",
    },
    {
      name: "Generate/Retrieve VID",
      description: "Generate or retrieve your Virtual ID.",
      link: "/generate-retrieve-vid",
      icon: "https://myaadhaar.uidai.gov.in/static/media/GenerateVirtualId.3bfc503ad6741bdcd3f63663c83135d3.svg",
    },
    {
      name: "PVC Aadhaar",
      description: "Order a PVC version of your Aadhaar.",
      link: "/pvc",
      icon: "https://myaadhaar.uidai.gov.in/static/media/OrderPVCStatusIcon.48dbab5dff41be6c2f3af8b8ede434f2.svg",
    },
    {
      name: "Feedback",
      description: "Provide your feedback about Aadhaar services.",
      link: "/feedback",
      icon: "https://myaadhaar.uidai.gov.in/static/media/FileAComplaintIcon.4450c8d4e888ca35dd739d7831e79cce.svg",
    },
    {
      name: "Check Status",
      description: "Track the status of your Aadhaar application.",
      link: "/check-status",
      icon: "https://myaadhaar.uidai.gov.in/static/media/DownloadAadhaar.71bd045f0092ff9b2127c7b69186dc14.svg",
    },
    {
      name: "Aadhaar Validity",
      description: "Check if your Aadhaar is valid.",
      link: "/aadhaar-validity",
      icon: "https://myaadhaar.uidai.gov.in/static/media/AadhaarLockUnlock.7258c7882ed335599363bfa4dd1fe633.svg",
    },
    {
      name: "Download Aadhaar",
      description: "Get your e-Aadhaar in digital format.",
      link: "/download-aadhaar",
      icon: "https://myaadhaar.uidai.gov.in/static/media/DownloadAadhaar.71bd045f0092ff9b2127c7b69186dc14.svg",
    },
    {
      name: "Login",
      description: "Access your account securely.",
      link: "/login",
      icon: "https://myaadhaar.uidai.gov.in/static/media/DocumentUpdate.367e861345889bdb4d30906dad6b698a.svg",
    },

  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
     
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 text-center">
       

        {/* Features Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link
              to={feature.link}
              key={feature.name}
              className="group flex flex-col items-center bg-white border shadow-sm rounded-lg p-4 hover:shadow-md transition"
            >
              <img
                src={feature.icon}
                alt={`${feature.name} Icon`}
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-700 group-hover:text-blue-600">
                {feature.name}
              </h2>
              <p className="text-sm text-gray-500 text-center">{feature.description}</p>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer Section */}
    
    </div>
  );
};

export default Home;
