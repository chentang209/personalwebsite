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
    <section id="app" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">应用展示</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            探索我们应用的精美界面和强大功能
          </p>
        </div>
        
        <div className="space-y-32">
          {screenshots.map((screenshot, index) => (
            <motion.div 
              key={screenshot.id}
              className="flex flex-col md:flex-row items-center justify-between gap-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12'}`}>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{screenshot.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{screenshot.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                  了解更多
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
