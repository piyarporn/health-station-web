import React from 'react';
import { Home, Newspaper, Info } from 'lucide-react'; 



// Component สำหรับปุ่มเมนู
const NavItem = ({ icon: Icon, label }) => (
  // แก้ไข: เปลี่ยน text-gray-700 เป็น text-white และ hover:text-cyan-200
  <a href="#" className="flex items-center text-white hover:text-cyan-200 font-normal mx-3 transition duration-150 ease-in-out">
    <Icon className="w-4 h-4 mr-1" />
    {label}
  </a>
);

// Component สำหรับส่วนหัว (Navigation Bar)
const Header = () => {
  const gradientStyle = {
    // โทนสีฟ้าเขียวสบายตา
    background: 'linear-gradient(90deg, #C8E6C9 0%, #B2EBF2 50%, #03ACF2 100%)',
  };

  return (
    <header className="py-4 shadow-md sticky top-0 z-30" style={gradientStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* แก้ไข: เพิ่ม text-white และ Text Shadow เพื่อให้ข้อความเรืองแสง (ตามคำขอเดิม) */}
        <div className="
          text-lg font-bold 
          text-gray-700
        ">
          โรงพยาบาลส่งเสริมสุขภาพตำบลกุดน้ำใส
        </div>
        <nav className="flex space-x-4">
          <NavItem icon={Home} label="หน้าหลัก" />
          <NavItem icon={Newspaper} label="ประกาศ/ข่าว" />
          <NavItem icon={Info} label="เกี่ยวกับเรา" />
        </nav>
      </div>
    </header>
  );
};

// =======================================================================
// Component สำหรับแสดงรูปภาพ Hospital Illustration
// =======================================================================
const HospitalIllustration = () => (
   <div className="illustration w-full h-full flex items-center justify-center overflow-hidden rounded-xl ">
    <img 
        src={'/health.png'} 
        alt="health.png" 
        className="w-full h-full object-cover" 
        style={{ display: 'block' }} 
    />
</div>
);


// Component สำหรับส่วนเนื้อหาหลัก (Hero Section)
const HeroSection = () => (
  // Hero Section มีความสูงขั้นต่ำที่เหมาะสม
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 
                  flex flex-col lg:flex-row items-center justify-between 
                  min-h-[500px] lg:min-h-[600px] gap-8 relative z-10">
    
    {/* ฝั่งซ้าย: ข้อความและปุ่ม - จัดชิดซ้ายบนจอใหญ่ */}
    <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col justify-center lg:items-start items-center text-center lg:text-left">
      <h1 className="text-4xl font-light text-gray-700 mb-4">
        ยินดีต้อนรับสู่
      </h1>
      <h2 className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-6">
        รพ.สต. กุดน้ำใส
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-lg">
        บริการสุขภาพใกล้บ้านคุณ ด้วยใจ และคุณภาพ<br/>
        เราพร้อมดูแลทุกคนในชุมชน
      </p>
      <button
        className="
          flex items-center justify-center space-x-2 
          px-8 py-3 text-lg font-bold text-white 
          bg-blue-600 rounded-lg shadow-2xl 
          hover:bg-blue-700 
          hover:scale-[1.03] transform transition duration-300 ease-in-out
          focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50
        "
      >
        {/* Icon สำหรับปุ่มข่าวประชาสัมพันธ์ (ซองจดหมาย) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
          />
        </svg>
        <span>ข่าวประชาสัมพันธ์</span>
      </button>
    </div>

    {/* ฝั่งขวา: รูปภาพประกอบ */}
    <div className="lg:w-1/2 w-full h-full flex items-stretch justify-center p-4"> 
     <div className="illustration w-full h-full flex items-center justify-center overflow-hidden rounded-xl ">
    <img 
        src={'/health.png'} 
        alt="health" 
        className="w-full h-full object-cover" 
        style={{ display: 'block' }} 
    />
</div>
    </div>
  </div>
);

// Component สำหรับส่วนท้าย (Footer)
const Footer = () => {
  const footerBgStyle = {
    backgroundColor: '#F5FCF5',
    backgroundImage: `
      radial-gradient(ellipse at 50% 100%, #C8E6C9 0%, transparent 70%),
      linear-gradient(to top, #F5FCF5, transparent)
    `,
    paddingTop: '6rem',
    position: 'relative',
  };
  
  return (
    <footer style={footerBgStyle} className="text-center text-gray-600 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8">
        <p className="mb-4">
          © 2568 โรงพยาบาลส่งเสริมสุขภาพตำบล (รพ.สต. กุดน้ำใส) สงวนลิขสิทธิ์ทั้งหมด
        </p>
        <p>
          ที่อยู่: xx หมู่ xx ตำบลกุดน้ำใส อำเภอน้ำพอง จังหวัดขอนแก่น | โทร: 0xx-xxx-xxxx
        </p>
      </div>
    </footer>
  );
};


// Component หลัก
const App = () => {
  return (
    // เพิ่ม relative ให้ div หลัก เพื่อให้อ้างอิงตำแหน่งขององค์ประกอบตกแต่งอื่นๆ
    <div className="min-h-screen flex flex-col bg-white font-sans relative overflow-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
