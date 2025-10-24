import React, { useState, useEffect } from 'react';
import AnnouncementCard from '../components/AnnouncementCard';
// สมมติว่าดึงข้อมูลมาจากไฟล์ JSON หรือ API
import { fetchAnnouncements } from '../api/data'; 

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // จำลองการดึงข้อมูลจาก API
    const data = fetchAnnouncements(); 
    setAnnouncements(data);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>กำลังโหลดข้อมูล...</div>;
  }

  return (
    <div className="announcement-list">
      <h2>📢 ประกาศทั้งหมดของสถานีอนามัย</h2>
      {announcements
        // เรียงตามวันที่ล่าสุด
        .sort((a, b) => new Date(b.date) - new Date(a.date)) 
        .map(announcement => (
          <AnnouncementCard key={announcement.id} data={announcement} />
        ))}
    </div>
  );
}

export default Announcements