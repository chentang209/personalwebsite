'use client';

export default function Footer() {
  return (
    <footer 
      className="bg-[#e3f0fd] border-t border-gray-800 py-12 mt-12" 
      style={{ 
        width: '100%', 
        margin: '0 auto',
        backgroundColor: '#e3f0fd'
      }}
    >
      <div className="max-w-6xl mx-auto px-6" style={{ margin: '0 auto' }}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <span 
              className="text-gray-700 text-2xl font-semibold"
              style={{
                lineHeight: '1.07143',
                letterSpacing: '-0.005em',
                fontWeight: '600'
              }}
            >
              <span style={{ color: '#666' }}>Michael Yang</span>
            </span>
            <span 
              className="text-gray-500"
              style={{
                fontSize: '17px',
                lineHeight: '1.47059',
                fontWeight: '400',
                letterSpacing: '-0.022em',
                color: '#666'
              }}
            >
              © {new Date().getFullYear()} All Rights Reserved
            </span>
          </div>
        </div>
        {/* Privacy policy section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 
            className="text-gray-700 text-xl font-medium mb-4"
            style={{
              lineHeight: '1.07143',
              letterSpacing: '-0.005em',
              fontWeight: '600',
              color: '#666'
            }}
          >
            隐私政策
          </h3>
          <p 
            className="text-gray-600"
            style={{
              fontSize: '17px',
              lineHeight: '1.47059',
              fontWeight: '400',
              letterSpacing: '-0.022em',
              color: '#666'
            }}
          >
            我们尊重您的隐私。本应用收集到的账号数据仅做游戏用途。
            我们不会将数据出售给第三方。
          </p>
        </div>
      </div>
    </footer>
  );
}
