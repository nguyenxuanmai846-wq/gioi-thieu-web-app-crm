import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import AuthModal from './components/AuthModal';
import CookieBanner from './components/CookieBanner';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';
import { initGA4 } from './utils/analytics';
import { getCurrentStoredUser, logoutUser } from './utils/firebaseAuth';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import AboutContact from './pages/AboutContact';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoInitialTier, setDemoInitialTier] = useState('Gói Nâng cao (Có AI)');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => getCurrentStoredUser());

  useEffect(() => {
    // Khởi tạo GA4 khi ứng dụng tải
    initGA4();
  }, []);

  const handleOpenDemo = (tierName = 'Gói Nâng cao (Có AI)') => {
    setDemoInitialTier(tierName);
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  const handleOpenAuth = () => {
    setAuthModalOpen(true);
  };

  const handleCloseAuth = () => {
    setAuthModalOpen(false);
  };

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = async () => {
    await logoutUser();
    setCurrentUser(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-indigo-600 selection:text-white">
        {/* Sticky Header with Mega Menu & Auth State */}
        <Navbar 
          onOpenDemo={handleOpenDemo}
          currentUser={currentUser}
          onOpenAuth={handleOpenAuth}
          onLogout={handleLogout}
        />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenDemo={handleOpenDemo} />} />
            <Route path="/tinh-nang" element={<Features onOpenDemo={handleOpenDemo} />} />
            <Route path="/giai-phap" element={<Solutions onOpenDemo={handleOpenDemo} />} />
            <Route path="/bang-gia" element={<Pricing onOpenDemo={handleOpenDemo} />} />
            <Route path="/kien-thuc" element={<Resources onOpenDemo={handleOpenDemo} />} />
            <Route path="/lien-he" element={<AboutContact onOpenDemo={handleOpenDemo} />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home onOpenDemo={handleOpenDemo} />} />
          </Routes>
        </main>

        {/* 4-Column Footer */}
        <Footer onOpenDemo={handleOpenDemo} />

        {/* Floating Quick Action & Zalo Chat */}
        <FloatingCTA onOpenDemo={handleOpenDemo} />

        {/* 2-Column Demo Consultation Modal */}
        <DemoModal
          isOpen={demoModalOpen}
          onClose={handleCloseDemo}
          initialTier={demoInitialTier}
        />

        {/* Google Authentication Modal */}
        <AuthModal
          isOpen={authModalOpen}
          onClose={handleCloseAuth}
          onLoginSuccess={handleLoginSuccess}
        />

        {/* Cookie & Personal Data Protection Banner (Law 91/2025/QH15) */}
        <CookieBanner />
      </div>
    </Router>
  );
}
