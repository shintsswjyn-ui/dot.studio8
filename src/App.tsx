import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPage from './pages/AboutPage';
import DrawingsPage from './pages/DrawingsPage';
import ArtworkPage from './pages/ArtworkPage';
import ContactPage from './pages/ContactPage';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/drawings" element={<PageTransition><DrawingsPage /></PageTransition>} />
            <Route path="/drawings/:id" element={<PageTransition><ArtworkPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          </Routes>
        </main>
        
        <footer className="py-12 px-6 border-t border-black/5 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-black/30">
            © {new Date().getFullYear()} DOT STUDIO BY SATRIYO ILMAHESA MAHAWIKAN. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </div>
    </Router>
  );
}
