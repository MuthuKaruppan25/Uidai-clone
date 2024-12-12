import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is e-Aadhaar?",
      answer:
        "e-Aadhaar is a digital version of the Aadhaar card that can be downloaded online. It contains your Aadhaar details and is equally valid as the physical Aadhaar card.",
    },
    {
      question: "Is e-Aadhaar equally valid like physical copy of Aadhaar?",
      answer:
        "Yes, e-Aadhaar is equally valid as the physical copy of Aadhaar as per the Aadhaar Act.",
    },
    {
      question: "What is Masked Aadhaar?",
      answer:
        "Masked Aadhaar is an option that allows you to hide your Aadhaar number in your downloaded e-Aadhaar, showing only the last 4 digits.",
    },
    {
      question: "How to validate digital signatures in e-Aadhaar?",
      answer:
        "To validate digital signatures, open your e-Aadhaar in a PDF reader, click on the signature, and follow the verification steps prompted by the reader.",
    },
    {
      question: "What is the Password of e-Aadhaar?",
      answer:
        "The password to open e-Aadhaar is the first four letters of your name in CAPITAL letters followed by your birth year (YYYY).",
    },
    {
      question: "What supporting software is needed to open e-Aadhaar?",
      answer: "You need a PDF reader, such as Adobe Reader, to open e-Aadhaar.",
    },
    {
      question: "How can an Aadhaar Number holder download e-Aadhaar?",
      answer:
        "An Aadhaar holder can download e-Aadhaar from the UIDAI website by entering their Aadhaar number, enrollment ID, or virtual ID.",
    },
  ];

  return (
    <div className="p-4 w-[500px]">
      {/* Header Section */}
      <div className="flex items-center space-x-4">
        <img
          src="https://myaadhaar.uidai.gov.in/static/media/faq-icon.2ec92ba82e3c3510425ffec418c95fb4.svg"
          alt="FAQ Icon"
          className="w-5 h-5"
        />
        <h1 className="text-[16px] font-semibold">Frequently Asked Questions</h1>
      </div>

      {/* FAQ Items */}
      <div className="mt-4 bg-white">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-2">
            <div
              className="flex justify-between items-center p-2 border rounded-lg cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <h1 className="text-md font-semibold">{item.question}</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown Content */}
            {openIndex === index && (
              <div className="mt-2 p-2 border rounded-lg bg-gray-50">
                <p className="text-sm text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
