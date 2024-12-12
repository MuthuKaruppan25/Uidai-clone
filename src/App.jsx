import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DownloadAadhaar from './pages/DownloadAadhaar';
import RetrieveEidUid from './pages/RetrieveEidUid';
import VerifyEmailMobile from './pages/VerifyEmailMobile';
import GenerateRetrieveVID from './pages/GenerateRetrieveVID';
import PVC from './pages/PVC';
import CheckStatus from './pages/CheckStatus';
import AadhaarValidity from './pages/AadhaarValidity';
import Feedback from './pages/Feedback';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen ">
        <Navbar />
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download-aadhaar" element={<DownloadAadhaar />} />
            <Route path="/retrieve-eid-uid" element={<RetrieveEidUid />} />
            <Route path="/verify-email-mobile" element={<VerifyEmailMobile />} />
            <Route path="/generate-retrieve-vid" element={<GenerateRetrieveVID />} />
            <Route path="/pvc" element={<PVC />} />
            <Route path="/check-status" element={<CheckStatus />} />
            <Route path="/aadhaar-validity" element={<AadhaarValidity />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
