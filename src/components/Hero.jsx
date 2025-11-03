// src/components/Hero.jsx
import React from 'react';

// ตัวอย่างภาพ Vector สำหรับเป็น Placeholder (แทนที่ด้วย Component/ภาพจริงของคุณ)
const HospitalIllustration = () => (
    <div className="illustration" style={{ 
        backgroundColor: '#f0f8ff', 
        border: '1px solid #ccc', 
        textAlign: 'center', 
        paddingTop: '50px', 
        color: '#888' 
    }}>
            </div>
)
const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    ยินดีต้อนรับสู่
                    <strong className="hospital-name-highlight">
                        รพ.สต. กุดน้ำใส
                    </strong>
                </h1>
                <p className="hero-subtitle">
                    บริการสุขภาพใกล้บ้านคุณ ด้วยใจ และคุณภาพ
                    <br />
                    เราพร้อมดูแลทุกคนในชุมชน
                </p>
                {/* เปลี่ยนจาก <button> เป็น <a href="#news"> เพื่อให้เกิดการเปลี่ยนหน้าไปยัง Anchor 
                  หรืออาจใช้ <button> และเพิ่ม onClick เพื่อใช้ JavaScript ในการ Scroll 
                  แต่การใช้ <a> เป็นวิธีที่ง่ายและตรงไปตรงมาที่สุดสำหรับการนำทางแบบนี้ 
                */}
                <a href="#news" className="cta-button"> 
                    อ่านข่าวประชาสัมพันธ์
                </a>
            </div>
            
            <div className="hero-image-container">
                <HospitalIllustration />
            </div>

            <div className="botanical-pattern"></div>
        </section>
    );
};
export default Hero;