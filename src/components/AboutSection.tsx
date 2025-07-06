'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-32 bg-white" 
      style={{ 
        width: '100%', 
        margin: '0 auto',
        backgroundColor: '#fbfbfd'
      }}
    >
      <div className="max-w-6xl mx-auto px-6" style={{ margin: '0 auto' }}>
        <div className="text-center mb-24">
          <motion.h2 
            className="text-5xl font-semibold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              lineHeight: '1.07143',
              letterSpacing: '-0.005em',
              fontWeight: '600'
            }}
          >
            关于我
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full">
            <motion.h3 
              className="text-4xl font-semibold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                lineHeight: '1.07143',
                letterSpacing: '-0.005em',
                fontWeight: '600'
              }}
            >
              你好，我是 Michael Yang
            </motion.h3>
            <motion.p 
              className="text-xl text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                lineHeight: '1.47059',
                fontWeight: '400',
                letterSpacing: '-0.022em'
              }}
            >
              我是一名充满激情的全栈开发工程师，专注于创建美观、高效且用户友好的应用程序。
              我热爱技术，喜欢学习新事物，并致力于通过代码解决问题。
            </motion.p>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                lineHeight: '1.47059',
                fontWeight: '400',
                letterSpacing: '-0.022em'
              }}
            >
              我的技术栈包括但不限于：React, Next.js, Node.js, Python 等。
              我相信好的设计不仅仅是看起来漂亮，更重要的是提供流畅的用户体验。
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h4 
                  className="font-semibold text-gray-900 text-3xl mb-2"
                  style={{
                    lineHeight: '1.07143',
                    letterSpacing: '-0.005em',
                    fontWeight: '600'
                  }}
                >
                  5+
                </h4>
                <p 
                  className="text-gray-600"
                  style={{
                    fontSize: '17px',
                    lineHeight: '1.47059',
                    fontWeight: '400',
                    letterSpacing: '-0.022em'
                  }}
                >
                  年开发经验
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h4 
                  className="font-semibold text-gray-900 text-3xl mb-2"
                  style={{
                    lineHeight: '1.07143',
                    letterSpacing: '-0.005em',
                    fontWeight: '600'
                  }}
                >
                  30+
                </h4>
                <p 
                  className="text-gray-600"
                  style={{
                    fontSize: '17px',
                    lineHeight: '1.47059',
                    fontWeight: '400',
                    letterSpacing: '-0.022em'
                  }}
                >
                  完成项目
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h4 
                  className="font-semibold text-gray-900 text-3xl mb-2"
                  style={{
                    lineHeight: '1.07143',
                    letterSpacing: '-0.005em',
                    fontWeight: '600'
                  }}
                >
                  100%
                </h4>
                <p 
                  className="text-gray-600"
                  style={{
                    fontSize: '17px',
                    lineHeight: '1.47059',
                    fontWeight: '400',
                    letterSpacing: '-0.022em'
                  }}
                >
                  客户满意度
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
