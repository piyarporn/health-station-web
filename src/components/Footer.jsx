// src/components/Footer.jsx
import React from 'react';
// import './Footer.css'; // ถ้าแยกไฟล์ CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>
                    &copy; 2568 โรงพยาบาลส่งเสริมสุขภาพตำบล (รพ.สต. กุดน้ำใส) สงวนลิขสิทธิ์ทั้งหมด
                </p>
                <p>
                    ที่อยู่: หมู่ xx ตำบลกุดน้ำใส อำเภอน้ำพอง จังหวัดขอนแก่น | โทร: 0xx-xxxx-xxxx
                </p>
            </div>
        </footer>
    );
};

export default Footer;