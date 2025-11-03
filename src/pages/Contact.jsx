// src/pages/ContactPage.jsx
import React from 'react';
import './ContactPage.css'; // สร้าง CSS สำหรับหน้านี้

const ContactPage = () => {
  // *** สำคัญ: นี่คือ URL iFrame ที่ถูกแปลงจากลิงก์แชร์ของคุณ
  // ลิงก์แชร์: https://share.google/ubW6tfleZ3V6v9R4U
  // ต้องใช้ URL สำหรับ 'ฝังแผนที่' (Embed Map) จริงๆ จาก Google Maps
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3824.225577319082!2d102.73038617594038!3d17.152860783701633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1s0x31248a39a8c17b5b%3A0xc682916b6c039d91!2z4Lir4Lin4LiE4Lii4Liy4Lir4Liy4LiZ4Lir4Liy4Lih4Lie4Lij4Liw4LmA4LiU4Lit4Liy4Lir4LiB4Liy4Lij4Liw4LmI4LiU4Liy4LiB4Lix4Lij4Li04LmA4LiU4Lit4Liy4Lir!5e0!3m2!1sth!2sth!4v1700540000000!5m2!1sth!2sth";

  // โค้ด iFrame ที่จะนำไปฝัง
  const mapIframe = `<iframe 
    src="${embedUrl}" 
    width="100%" 
    height="450" 
    style="border:0; border-radius: 8px;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>`;

  return (
    <div className="page-content contact-page">
      <h1>📞 ติดต่อเราและที่ตั้ง รพ.สต. กุดน้ำใส</h1>
      <p>เราพร้อมดูแลสุขภาพของท่านด้วยความตั้งใจจริง</p>
      
      <div className="contact-info">
        <h3>📍 ที่ตั้ง</h3>
        <p>รพ.สต. กุดน้ำใส, หมู่ 3 ตำบล กุดน้ำใส, อำเภอน้ำพอง, จังหวัดขอนแก่น 40140</p>
        <p>โทรศัพท์: 0xx-xxx-xxxx</p>
      </div>

      <div className="map-container">
        <h2>แผนที่โรงพยาบาล</h2>
        {/* การฝัง iFrame โดยใช้ dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={{ __html: mapIframe }} />
      </div>
    </div>
  );
};

export default ContactPage;