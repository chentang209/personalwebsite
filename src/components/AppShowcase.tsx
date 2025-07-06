'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AppShowcase() {
  const screenshots = [
    {
      id: 1,
      title: "直观的界面设计",
      description: "简洁直观的用户界面，让操作变得简单直观。",
      image: "/images/Simulator Screenshot - iPhone 16 - 2025-07-06 at 16.36.29.png"
    },
    {
      id: 2,
      title: "强大的功能",
      description: "丰富的功能集合，满足您的各种需求。",
      image: "/images/Simulator Screenshot - iPhone 16 - 2025-07-06 at 16.39.47.png"
    },
    {
      id: 3,
      title: "流畅的体验",
      description: "优化性能，确保流畅的用户体验。",
      image: "/images/Simulator Screenshot - iPhone 16 - 2025-07-06 at 16.41.05.png"
    }
  ];

  return (
    <section 
      id="app" 
      className="py-32 bg-gray-50" 
      style={{ 
        width: '100%', 
        margin: '0 auto',
        backgroundColor: '#f5f5f7'
      }}
    >
      <div className="max-w-6xl mx-auto px-6" style={{ margin: '0 auto' }}>
        <div className="text-center mb-24">
          {/* <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              lineHeight: '1.47059',
              fontWeight: '400',
              letterSpacing: '-0.022em'
            }}
          >
            探索我们应用的精美界面和强大功能
          </motion.p> */}
        </div>
        
        {/* Horizontal scrolling showcase */}
        <div className="relative overflow-hidden" style={{ padding: '32px 0', marginBottom: '48px' }}>
          <motion.div 
            className="flex items-center"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              display: 'flex',
              gap: '2rem',
              width: 'max-content'
            }}
          >
            {/* First set of screenshots */}
            {screenshots.map((screenshot, index) => (
              <motion.div 
                key={`first-${screenshot.id}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{
                  width: '320px',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'white',
                  borderRadius: '24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  padding: '16px',
                  height: '100%'
                }}
              >
                <Image 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="mt-6 text-center">
                  <h3 
                    className="text-2xl font-semibold text-gray-900 mb-3"
                    style={{
                      lineHeight: '1.07143',
                      letterSpacing: '-0.005em',
                      fontWeight: '600'
                    }}
                  >
                    {screenshot.title}
                  </h3>
                  <p 
                    className="text-gray-600"
                    style={{
                      fontSize: '17px',
                      lineHeight: '1.47059',
                      fontWeight: '400',
                      letterSpacing: '-0.022em'
                    }}
                  >
                    {screenshot.description}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {screenshots.map((screenshot, index) => (
              <motion.div 
                key={`second-${screenshot.id}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{
                  width: '320px',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'white',
                  borderRadius: '24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  padding: '16px',
                  height: '100%'
                }}
              >
                <Image 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="mt-6 text-center">
                  <h3 
                    className="text-2xl font-semibold text-gray-900 mb-3"
                    style={{
                      lineHeight: '1.07143',
                      letterSpacing: '-0.005em',
                      fontWeight: '600'
                    }}
                  >
                    {screenshot.title}
                  </h3>
                  <p 
                    className="text-gray-600"
                    style={{
                      fontSize: '17px',
                      lineHeight: '1.47059',
                      fontWeight: '400',
                      letterSpacing: '-0.022em'
                    }}
                  >
                    {screenshot.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 text-lg inline-flex items-center transform hover:scale-105"
            style={{
              borderRadius: '980px',
              fontSize: '17px',
              fontWeight: '400'
            }}
          >
            立即体验
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
