// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // สมมติว่ามีไฟล์ CSS

function Header() {
  return (
    <header className="header-bar">
      <div className="logo-section">
        <img src="/logo.png" alt="โลโก้สถานีอนามัย" className="logo" />
        <h1>สถานีอนามัยตำบล... (รพ.สต.)</h1>
      </div>
      <nav className="navbar">
        <Link to="/">หน้าแรก</Link>
        <Link to="/announcements">ประกาศ/ข่าวสาร</Link>
        <Link to="/services">บริการ</Link>
        <Link to="/contact">ติดต่อเรา</Link>
      </nav>
    </header>
  );
}

export default Header;