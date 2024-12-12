import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-md py-2 px-4 md:px-8 font-roboto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="https://myaadhaar.uidai.gov.in/static/media/uidai_english_logo.37b7e790fc0b23da21bc9df098a66467.svg"
            alt="UIDAI Logo"
            className="w-[31px] h-[50px]"
          />
        </div>

        {/* Center Title */}
        <div className="hidden lg:block">
          <h1
            className="text-[24px] font-bold text-center"
            style={{ color: "rgb(32, 114, 160)" }}
          >
            Unique Identification Authority of India
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="https://myaadhaar.uidai.gov.in/static/media/aadhaar_english_logo.9a2d63795a7f7bdd7acb2148585336be.svg"
            alt="UIDAI Logo"
            className="w-[76px] h-[49px]"
          />
        </div>
      </div>

      {/* Full-width Blue Div */}
      <div className="flex justify-between items-center my-2 w-full px-4" style={{
          background: "linear-gradient(to right, rgb(2, 13, 81), rgb(25, 176, 220))",
        }}>
        <div className="flex items-center space-x-4">
          <img
            src="https://myaadhaar.uidai.gov.in/static/media/dashboard.21335c2c89af71912adf700d228cbecd.svg"
            alt="UIDAI Logo"
            className="w-[24px] h-[24px] my-2 ml-2"
          />
          <h1 className="text-white font-bold">myAadhaar</h1>
        </div>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 text-white focus:outline-none"
          >
            <img
              src="https://myaadhaar.uidai.gov.in/static/media/LanguageSelector.dd14b8054218a45a518df6f26aaff418.svg"
              alt="Language Selector"
              className="w-[24px] h-[24px] my-2 ml-2"
            />
            <span>{selectedLanguage}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 transform transition-transform ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
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
          </button>

          {isDropdownOpen && (
            <ul className="absolute text-center right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg z-10">
              {[
                "English",
                "हिंदी",
                "বাংলা",
                "ಕನ್ನಡ",
                "ગુજરાતી",
                "മലയാളം",
                "मराठी",
                "ଓଡ଼ିଆ",
                "ਪੰਜਾਬੀ",
                "தமிழ்",
                "తెలుగు",
                "اردو",
              ].map((language) => (
                <li
                  key={language}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleLanguageChange(language)}
                >
                  {language}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Mobile Title */}
      <div className="lg:hidden text-center mt-2">
        <h1 className="font-semibold text-gray-800">
          Unique Identification Authority of India
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
