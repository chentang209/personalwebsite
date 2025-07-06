'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">关于我</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="relative rounded-full overflow-hidden w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">MY</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">你好，我是 Michael Yang</h3>
            <p className="text-gray-600 mb-4">
              我是一名充满激情的全栈开发工程师，专注于创建美观、高效且用户友好的应用程序。
              我热爱技术，喜欢学习新事物，并致力于通过代码解决问题。
            </p>
            <p className="text-gray-600 mb-6">
              我的技术栈包括但不限于：React, Next.js, Node.js, Python 等。
              我相信好的设计不仅仅是看起来漂亮，更重要的是提供流畅的用户体验。
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">5+</h4>
                <p className="text-gray-600 text-sm">年开发经验</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">30+</h4>
                <p className="text-gray-600 text-sm">完成项目</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">100%</h4>
                <p className="text-gray-600 text-sm">客户满意度</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
