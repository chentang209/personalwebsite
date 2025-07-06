'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import AppShowcase from '@/components/AppShowcase';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Apple-style design constants
const APPLE_COLORS = {
  black: '#1d1d1f',
  white: '#fbfbfd',
  gray: '#86868b',
  blue: '#0071e3',
  grayLight: '#f5f5f7'
};

// Apple-style navigation component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 apple-nav ${scrolled ? 'scrolled' : ''}`}
      style={{
        background: scrolled ? 'rgba(251,251,253,0.95)' : 'rgba(251,251,253,0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid #d2d2d7',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        padding: scrolled ? '10px 0' : '18px 0',
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* LOGO/名字 */}
        <span className="text-xl font-semibold tracking-tight text-gray-900" style={{fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif'}}>Michael Yang</span>
        {/* Desktop navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center space-x-8">
            {['首页', '应用展示', '关于我', '联系我'].map((item, index) => (
              <a
                key={item}
                href={`#${['home', 'app', 'about', 'contact'][index]}`}
                className="text-gray-700 hover:text-blue-600 transition-colors text-base font-medium px-2 py-1 rounded"
                style={{fontFamily: 'inherit'}}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-gray-900 bg-white/70 rounded-full p-2 border border-gray-200 shadow-sm"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg rounded-b-xl animate-fadeInUp">
          <div className="flex flex-col items-center space-y-2 py-4">
            {['首页', '应用展示', '关于我', '联系我'].map((item, index) => (
              <a
                key={item}
                href={`#${['home', 'app', 'about', 'contact'][index]}`}
                className="text-gray-900 hover:text-blue-600 transition-colors text-lg py-2 w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// Apple-style hero section
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        width: '100%',
        margin: '0 auto',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight whitespace-nowrap text-center"
          style={{ 
            fontWeight: 700,
            fontSize: 'clamp(1.75rem, 5vw, 5rem)',
            lineHeight: 1.1
          }}
        >
          创新科技 改变生活
        </motion.h1>
        <motion.p
          className="text-white/90 mb-10 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            lineHeight: '1.5',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)'
          }}
        >
          探索我精心打造的应用，体验前沿科技带来的无限可能
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* <a
            href="#app"
            className="apple-button text-lg px-8 py-4 shadow-md hover:shadow-lg"
            style={{ fontWeight: 500, fontSize: '18px' }}
          >
            探索应用
          </a>
          <a
            href="#contact"
            className="apple-button-secondary text-lg px-8 py-4 border-2 border-white text-white hover:bg-white/10 hover:text-white"
            style={{ fontWeight: 500, fontSize: '18px', borderColor: '#fff' }}
          >
            联系我
          </a> */}
        </motion.div>
      </div>
    </section>
  );
}

// Apple-style main page component
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <main className="w-full">
        <HeroSection />
        <AppShowcase />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
