// src/components/Header.jsx
import React from 'react';
import { Home, FileText, Info } from 'lucide-react'; 
// import './Header.css'; 
import { Link } from 'react-router-dom'; // 👈 นำเข้า Link

const Header = () => {
    return (
        <header className="header">
            <div className="nav-container">
                <div className="hospital-name flex items-center gap-3">
                <img 
                src="/moph-logo.png" 
                alt="Logo MOPH"
                className="moph-logo"
            />
                    โรงพยาบาลส่งเสริมสุขภาพตำบลกุดน้ำใส
                </div>
                
                <div className="nav-links">
                    {/* เปลี่ยนเป็น Link to="/" และใช้ hash */}
                    <Link to="/#home" className="active"> 
                        <Home size={20} />
                        หน้าหลัก
                    </Link>
                    {/* เปลี่ยนเป็น Link to="/" และใช้ hash */}
                    <Link to="/#news">
                        <FileText size={20} />
                        ประกาศข่าว
                    </Link>
                    {/* เปลี่ยนเป็น Link to="/" และใช้ hash */}
                    <Link to="/#about">
                        <Info size={20} />
                        เกี่ยวกับเรา
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;