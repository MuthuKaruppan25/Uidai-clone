import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-2"
    style={{
      background: "linear-gradient(to right, rgb(2, 13, 81), rgb(25, 176, 220))",
    }}>
      <div className="container mx-auto text-center">
        <p>&copy; 2024 UIDAI Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
