import React, { useState } from 'react';
import { Home, Newspaper, Info, Menu, X } from 'lucide-react'; 

// Component สำหรับปุ่มเมนู
const NavItem = ({ icon: Icon, label, onClick }) => (
  // ปรับการแสดงผล: ใช้ text-gray-700 บนพื้นหลังสว่าง และเพิ่มขนาด/ padding บนมือถือ
  <a 
    href="#" 
    className="
      flex items-center text-white hover:text-blue-500 font-medium 
      p-2 rounded-md transition duration-150 ease-in-out
      lg:mx-3 lg:p-0
    "
    onClick={onClick}
  >
    <Icon className="w-5 h-5 lg:w-4 lg:h-4 mr-2 lg:mr-1" />
    <span className="text-base lg:text-sm">{label}</span>
  </a>
);

// Component สำหรับส่วนหัว (Navigation Bar)
const Header = () => {
  // 🟢 เพิ่ม state สำหรับจัดการสถานะการเปิด/ปิดเมนูบนมือถือ
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const gradientStyle = {
    // โทนสีฟ้าเขียวสบายตา
    background: 'linear-gradient(90deg, #C8E6C9 0%, #B2EBF2 50%, #03ACF2 100%)',
  };
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="py-2 lg:py-4 shadow-md sticky top-0 z-30" style={gradientStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
        {/* 🟢 ส่วน Logo และ Title */}
        <div className="
          text-lg sm:text-xl lg:text-2xl font-extrabold 
          text-gray-700
          flex items-center space-x-2 lg:space-x-4
        ">
          <img 
            src="moph-logo.png"  /* ➡️ ตรวจสอบชื่อไฟล์ให้ถูกต้อง */
            alt="Logo MOPH" 
            // 🟢 ปรับขนาด Logo ให้เล็กลงบนมือถือและใหญ่ขึ้นบน Desktop
            className="h-10 w-auto sm:h-12 lg:h-16 rounded-full shadow-lg" 
          />
          <span className="hidden sm:block">โรงพยาบาลส่งเสริมสุขภาพตำบลกุดน้ำใส</span>
          <span className="block sm:hidden text-base">รพ.สต. กุดน้ำใส</span> {/* ชื่อย่อบนมือถือ */}
        </div>
          
        {/* 🟢 ส่วน Desktop Menu - แสดงบนจอใหญ่เท่านั้น */}
        <nav className="hidden lg:flex space-x-4">
          <NavItem icon={Home} label="หน้าหลัก" />
          <NavItem icon={Newspaper} label="ประกาศ/ข่าว" />
          <NavItem icon={Info} label="เกี่ยวกับเรา" />
        </nav>
        
        {/* 🟢 ส่วน Mobile Hamburger Icon - แสดงบนจอเล็กเท่านั้น */}
        <button 
          className="lg:hidden p-2 text-white hover:text-blue-600"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 🟢 Mobile Menu Container - แสดงเมื่อ isMenuOpen เป็นจริง */}
      <nav 
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 p-4 border-t border-gray-300' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-white shadow-lg`}
      >
        <div className="flex flex-col space-y-1">
          <NavItem icon={Home} label="หน้าหลัก" onClick={toggleMenu} />
          <NavItem icon={Newspaper} label="ประกาศ/ข่าว" onClick={toggleMenu} />
          <NavItem icon={Info} label="เกี่ยวกับเรา" onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  );
};


// Component สำหรับส่วนเนื้อหาหลัก (Hero Section)
const HeroSection = () => (
  // ปรับ Padding และ Min-Height ให้ยืดหยุ่นขึ้นบนมือถือ
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 
                  flex flex-col lg:flex-row items-center justify-between 
                  min-h-[50vh] lg:min-h-[70vh] gap-8 relative z-10">
    
    {/* ฝั่งซ้าย: ข้อความและปุ่ม */}
    <div className="
      lg:w-1/2 w-full
      flex flex-col justify-center 
      items-center lg:items-start 
      text-center lg:text-left
    ">
      
      {/* 🟢 ปรับขนาดข้อความให้เหมาะสมกับมือถือ */}
      <h1 className="text-2xl sm:text-3xl font-light text-gray-700 mb-2 sm:mb-4">
        ยินดีต้อนรับสู่
      </h1>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-700 mb-4 sm:mb-6 leading-tight">
        รพ.สต. กุดน้ำใส
      </h2>
      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg">
        บริการสุขภาพใกล้บ้านคุณ ด้วยใจ และคุณภาพ<br/>
        เราพร้อมดูแลทุกคนในชุมชน
      </p>
      
      {/* 🟢 ปรับขนาดปุ่มให้เหมาะสมกับมือถือ */}
      <button
        className="
          flex items-center justify-center space-x-2 
          px-6 py-3 text-base sm:text-lg font-bold text-white 
          bg-blue-600 rounded-lg shadow-2xl 
          hover:bg-blue-700 
          hover:scale-[1.03] transform transition duration-300 ease-in-out
          focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50
          max-w-xs sm:max-w-none 
        "
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 sm:h-6 sm:w-6" 
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

    {/* ฝั่งขวา: รูปภาพประกอบ - ซ่อนบนจอเล็กมากเพื่อประหยัดพื้นที่ */}
    <div className="
      lg:w-1/2 w-full h-full 
      flex items-stretch justify-center p-4 
      hidden sm:flex /* 🟢 แสดงเฉพาะบน sm ขึ้นไป */
    "> 
      <div className="illustration w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
        <img 
          src={'/health.png'} 
          alt="Hospital Illustration" 
          className="w-full h-full object-cover " 
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
    paddingTop: '3rem', // 🟢 ลด padding บนมือถือ
    position: 'relative',
  };
  
  return (
    <footer style={footerBgStyle} className="text-center text-gray-600 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-4 sm:pb-8">
        {/* 🟢 ปรับขนาด Font ให้เล็กลงบนมือถือ */}
        <p className="mb-2 text-sm sm:text-base">
          © 2568 โรงพยาบาลส่งเสริมสุขภาพตำบล (รพ.สต. กุดน้ำใส) สงวนลิขสิทธิ์ทั้งหมด
        </p>
        <p className="text-xs sm:text-sm">
          ที่อยู่: xx หมู่ xx ตำบลกุดน้ำใส อำเภอน้ำพอง จังหวัดขอนแก่น | โทร: 0xx-xxx-xxxx
        </p>
      </div>
    </footer>
  );
};


// Component หลัก
const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans relative overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;


// import React from 'react';
// import { Home, Newspaper, Info } from 'lucide-react'; 



// // Component สำหรับปุ่มเมนู
// const NavItem = ({ icon: Icon, label }) => (
//   // แก้ไข: เปลี่ยน text-gray-700 เป็น text-white และ hover:text-cyan-200
//   <a href="#" className="flex items-center text-white hover:text-cyan-200 font-normal mx-3 transition duration-150 ease-in-out">
//     <Icon className="w-4 h-4 mr-1" />
//     {label}
//   </a>
// );

// // Component สำหรับส่วนหัว (Navigation Bar)
// const Header = () => {
//   const gradientStyle = {
//     // โทนสีฟ้าเขียวสบายตา
//     background: 'linear-gradient(90deg, #C8E6C9 0%, #B2EBF2 50%, #03ACF2 100%)',
//   };

//   return (
//     <header className="py-4 shadow-md sticky top-0 z-30" style={gradientStyle}>
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
//         {/* 🟢 ส่วนที่แก้ไข: เพิ่ม Logo และจัดเรียงด้วย Flexbox (flex, items-center, gap-2) */}
//         <div className="
//             text-xl font-bold 
//             text-gray-700
//             flex items-center space-x-10 gap-10  /* ⬅️ เพิ่ม Flexbox เพื่อจัดเรียงโลโก้และข้อความ */
//         ">
            
//             {/* 🟢 เพิ่มแท็ก Image/img สำหรับโลโก้ */}
//             <img 
//                 src="/moph-logo.png"  /* ➡️ ตรวจสอบชื่อไฟล์ให้ถูกต้อง */
//                 alt="Logo MOPH" 
//                 className="h-24 w-auto" /* ➡️ ปรับขนาดโลโก้ตามต้องการ (h-8 คือสูง 2rem) */
//             />
            
//             โรงพยาบาลส่งเสริมสุขภาพตำบลกุดน้ำใส
//         </div>
        
//         <nav className="flex space-x-4">
//             <NavItem icon={Home} label="หน้าหลัก" />
//             <NavItem icon={Newspaper} label="ประกาศ/ข่าว" />
//             <NavItem icon={Info} label="เกี่ยวกับเรา" />
//         </nav>
//     </div>
// </header>
//   );
// };

// // =======================================================================
// // Component สำหรับแสดงรูปภาพ Hospital Illustration
// // =======================================================================
// const HospitalIllustration = () => (
//    <div className="illustration w-full h-full flex items-center justify-center overflow-hidden rounded-xl ">
//     <img 
//         src={'/health.png'} 
//         alt="health.png" 
//         className="w-full h-full object-cover" 
//         style={{ display: 'block' }} 
//     />
// </div>
// );


// // Component สำหรับส่วนเนื้อหาหลัก (Hero Section)
// const HeroSection = () => (
//   // Hero Section มีความสูงขั้นต่ำที่เหมาะสม
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 
//                   flex flex-col lg:flex-row items-center justify-between 
//                   min-h-[500px] lg:min-h-[600px] gap-8 relative z-10">
    
//     {/* ฝั่งซ้าย: ข้อความและปุ่ม - จัดชิดซ้ายบนจอใหญ่ */}
//     <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col justify-center lg:items-start items-center text-center lg:text-left">
//       <h1 className="text-4xl font-light text-gray-700 mb-4">
//         ยินดีต้อนรับสู่
//       </h1>
//       <h2 className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-6">
//         รพ.สต. กุดน้ำใส
//       </h2>
//       <p className="text-xl text-gray-600 mb-8 max-w-lg">
//         บริการสุขภาพใกล้บ้านคุณ ด้วยใจ และคุณภาพ<br/>
//         เราพร้อมดูแลทุกคนในชุมชน
//       </p>
//       <button
//         className="
//           flex items-center justify-center space-x-2 
//           px-8 py-3 text-lg font-bold text-white 
//           bg-blue-600 rounded-lg shadow-2xl 
//           hover:bg-blue-700 
//           hover:scale-[1.03] transform transition duration-300 ease-in-out
//           focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50
//         "
//       >
//         {/* Icon สำหรับปุ่มข่าวประชาสัมพันธ์ (ซองจดหมาย) */}
//         <svg 
//           xmlns="http://www.w3.org/2000/svg" 
//           className="h-6 w-6" 
//           fill="none" 
//           viewBox="0 0 24 24" 
//           stroke="currentColor" 
//           strokeWidth="2"
//         >
//           <path 
//             strokeLinecap="round" 
//             strokeLinejoin="round" 
//             d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
//           />
//         </svg>
//         <span>ข่าวประชาสัมพันธ์</span>
//       </button>
//     </div>

//     {/* ฝั่งขวา: รูปภาพประกอบ */}
//     <div className="lg:w-1/2 w-full h-full flex items-stretch justify-center p-4"> 
//      <div className="illustration w-full h-full flex items-center justify-center overflow-hidden rounded-xl ">
//     <img 
//         src={'/health.png'} 
//         alt="health" 
//         className="w-full h-full object-cover" 
//         style={{ display: 'block' }} 
//     />
// </div>
//     </div>
//   </div>
// );

// // Component สำหรับส่วนท้าย (Footer)
// const Footer = () => {
//   const footerBgStyle = {
//     backgroundColor: '#F5FCF5',
//     backgroundImage: `
//       radial-gradient(ellipse at 50% 100%, #C8E6C9 0%, transparent 70%),
//       linear-gradient(to top, #F5FCF5, transparent)
//     `,
//     paddingTop: '6rem',
//     position: 'relative',
//   };
  
//   return (
//     <footer style={footerBgStyle} className="text-center text-gray-600 border-t border-gray-200 mt-auto">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8">
//         <p className="mb-4">
//           © 2568 โรงพยาบาลส่งเสริมสุขภาพตำบล (รพ.สต. กุดน้ำใส) สงวนลิขสิทธิ์ทั้งหมด
//         </p>
//         <p>
//           ที่อยู่: xx หมู่ xx ตำบลกุดน้ำใส อำเภอน้ำพอง จังหวัดขอนแก่น | โทร: 0xx-xxx-xxxx
//         </p>
//       </div>
//     </footer>
//   );
// };


// // Component หลัก
// const App = () => {
//   return (
//     // เพิ่ม relative ให้ div หลัก เพื่อให้อ้างอิงตำแหน่งขององค์ประกอบตกแต่งอื่นๆ
//     <div className="min-h-screen flex flex-col bg-white font-sans relative overflow-hidden">
//       <Header />
//       <main className="flex-grow">
//         <HeroSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;
