'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import AppShowcase from '@/components/AppShowcase';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// 导航栏组件
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <span className="text-white text-2xl font-bold">Michael Yang</span>
          </div>
          
          {/* 桌面导航 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">首页</a>
              <a href="#app" className="text-gray-300 hover:text-white transition-colors">应用展示</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">关于我</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">联系我</a>
            </div>
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* 移动端菜单 */}
      {isOpen && (
        <div className="md:hidden bg-black/95 absolute w-full px-4 pb-4">
          <div className="flex flex-col space-y-4 pt-4">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors text-lg" onClick={() => setIsOpen(false)}>首页</a>
            <a href="#app" className="text-gray-300 hover:text-white transition-colors text-lg" onClick={() => setIsOpen(false)}>应用展示</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors text-lg" onClick={() => setIsOpen(false)}>关于我</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-lg" onClick={() => setIsOpen(false)}>联系我</a>
          </div>
        </div>
      )}
    </nav>
  );
}

// 英雄区域组件
function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          创新科技，改变生活
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          探索我们精心打造的应用，体验前沿科技带来的无限可能
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a 
            href="#app" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
          >
            探索应用
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
          >
            联系我
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">向下滚动</span>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

// 主页面组件
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AppShowcase />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
