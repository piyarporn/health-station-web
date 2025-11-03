// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import newsBackground from '../assets/news_background.jpg'; // 1. นำเข้ารูปภาพพื้นหลัง

const HomePage = () => {
  const latestNews = newsData[0]; // ดึงข่าวล่าสุดมาแสดงเด่น

  // สร้าง Style object สำหรับพื้นหลัง
  const newsHighlightStyle = {
    backgroundImage: `url(${newsBackground})`,
    backgroundSize: 'cover', // ปรับขนาดรูปให้ครอบคลุมพื้นที่
    backgroundPosition: 'center', // จัดตำแหน่งรูปให้อยู่ตรงกลาง
    backgroundRepeat: 'no-repeat', // ไม่ให้รูปซ้ำ
    padding: '40px 20px', // เพิ่ม padding เพื่อให้เนื้อหาไม่ติดขอบรูป
    borderRadius: '10px', // ทำให้ขอบมนขึ้น
    color: '#333', // ปรับสีตัวอักษรให้เข้ากับพื้นหลัง
    position: 'relative', // สำคัญสำหรับ overlay
    overflow: 'hidden', // ซ่อนส่วนเกินของ background
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  // สร้าง Style object สำหรับ overlay เพื่อให้ข้อความอ่านง่ายขึ้น
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // สีขาวโปร่งแสง 70%
    borderRadius: '10px',
    zIndex: 1, // ให้อยู่ด้านหลังเนื้อหา
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2, // ให้นื้อหาอยู่ด้านหน้า overlay
  };

  return (
    <div className="page-content">
      <section className="hero-section">
        <h1>ยินดีต้อนรับสู่ รพ.สต. กุดน้ำใส</h1>
        <p>
          บริการสุขภาพใกล้บ้านคุณ ด้วยใจ และคุณภาพ เราพร้อมดูแลทุกคนในชุมชน
        </p>
        <Link to="/services" className="button primary-button">
          ดูบริการของเรา
        </Link>
      </section>

      {/* เพิ่มรูปภาพพื้นหลังในส่วน news-highlight */}
      <section className="news-highlight" style={newsHighlightStyle}>
        <div style={overlayStyle}></div> {/* Overlay สีขาวโปร่งแสง */}
        <div style={contentStyle}> {/* เนื้อหาทั้งหมดอยู่ใน div นี้ */}
          <h2 style={{ color: '#333' }}>📢 ข่าว/ประกาศล่าสุด</h2> {/* ปรับสี h2 ให้เข้ากับพื้นหลัง */}
          {latestNews ? (
            <div className="news-card highlight-card">
              <img src={latestNews.imageUrl} alt={latestNews.title} className="news-image" />
              <h3>{latestNews.title}</h3>
              <p className="news-date">วันที่: {latestNews.date}</p>
              <p>{latestNews.excerpt}</p>
              <Link to={`/news/${latestNews.id}`} className="read-more-link">
                อ่านต่อ...
              </Link>
            </div>
          ) : (
            <p>ไม่มีประกาศข่าวในขณะนี้</p>
          )}
          <div style={{ marginTop: '20px' }}>
              <Link to="/news" className="button secondary-button">
                ดูประกาศทั้งหมด
              </Link>
          </div>
        </div>
      </section>

      {/* สามารถเพิ่ม Section อื่นๆ เช่น บริการเด่น หรือ ข้อมูลติดต่อ */}
    </div>
  );
};

export default HomePage;