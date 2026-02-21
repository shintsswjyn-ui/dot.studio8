import React, { useState, useEffect } from 'react';
import { siteConfig } from '../siteConfig';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const slides = siteConfig.heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {slides[current].type === 'video' ? (
            <video
              src={slides[current].src}
              poster={slides[current].poster}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover opacity-60"
            />
          ) : (
            <img
              src={slides[current].src}
              alt={slides[current].alt}
              className="h-full w-full object-cover opacity-60"
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[10px] md:text-xs text-white/40 font-sans uppercase tracking-[1em] font-light mb-10"
        >
          DOT.STUDIO
        </motion.span>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-serif tracking-[0.15em] uppercase mb-10 sm:whitespace-nowrap max-w-[90vw]"
        >
          {siteConfig.artistName}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-white/50 text-[10px] md:text-xs font-light tracking-[0.5em] mb-20"
        >
          {siteConfig.tagline}
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Link
            to="/about"
            className="px-14 py-5 bg-black text-white border border-black uppercase tracking-[0.6em] text-[10px] hover:bg-white hover:text-black transition-all duration-500 ease-in-out"
          >
            Get Started
          </Link>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 left-0 w-full flex justify-between px-12 items-center">
        <button onClick={prev} className="text-white/50 hover:text-white transition-colors">
          <ChevronLeft size={32} strokeWidth={1} />
        </button>

        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                current === idx ? 'bg-white w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        <button onClick={next} className="text-white/50 hover:text-white transition-colors">
          <ChevronRight size={32} strokeWidth={1} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
