import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import CookieBanner from './components/CookieBanner';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';

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

  const handleOpenDemo = (tierName = 'Gói Nâng cao (Có AI)') => {
    setDemoInitialTier(tierName);
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-indigo-600 selection:text-white">
        {/* Sticky Header with Mega Menu */}
        <Navbar onOpenDemo={handleOpenDemo} />

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

        {/* Floating Quick Action Button */}
        <FloatingCTA onOpenDemo={handleOpenDemo} />

        {/* 2-Column Demo Consultation Modal */}
        <DemoModal
          isOpen={demoModalOpen}
          onClose={handleCloseDemo}
          initialTier={demoInitialTier}
        />

        {/* Cookie & Personal Data Protection Banner (Law 91/2025/QH15) */}
        <CookieBanner />
      </div>
    </Router>
  );
}
