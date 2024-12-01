import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">UIDAI</h1>

        {/* Hamburger Icon */}
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:space-x-4 lg:items-center lg:static absolute top-full left-0 w-full bg-blue-600 lg:bg-transparent z-10`}
        >
          <li className="border-b lg:border-none">
            <Link
              to="/"
              className="block py-2 px-4 lg:py-0 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              to="/download-aadhaar"
              className="block py-2 px-4 lg:py-0 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Download Aadhaar
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              to="/retrieve-eid-uid"
              className="block py-2 px-4 lg:py-0 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Retrieve EID/UID
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              to="/verify-email-mobile"
              className="block py-2 px-4 lg:py-0 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Verify Email/Mobile
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              to="/generate-retrieve-vid"
              className="block py-2 px-4 lg:py-0 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Generate/Retrieve VID
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              to="/pvc"
              className="block py-2 px-4 lg:py-0 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              PVC
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              to="/check-status"
              className="block py-2 px-4 lg:py-0 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Check Status
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              to="/aadhaar-validity"
              className="block py-2 px-4 lg:py-0 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Aadhaar Validity
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              to="/feedback"
              className="block py-2 px-4 lg:py-0 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Feedback
            </Link>
          </li>
          <li className="border-b lg:border-none">
            <Link
              to="/login"
              className="block py-2 px-4 lg:py-0 hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
