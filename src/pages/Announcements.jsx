// src/pages/Announcements.jsx
import React from 'react';
import AnnouncementCard from '../components/AnnouncementCard';
import { announcementsData } from '../data/newsData'; // ดึงข้อมูลจำลอง

function Announcements() {
    // 1. เรียงข้อมูลจากใหม่ไปเก่า
    const sortedAnnouncements = [...announcementsData].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );

    return (
        <div className="announcements-page">
            <h2>📜 ศูนย์รวมประกาศและข่าวสาร</h2>
            
            <div className="announcements-list">
                {sortedAnnouncements.map(announcement => (
                    <AnnouncementCard key={announcement.id} data={announcement} />
                ))}
            </div>
        </div>
    );
}

export default Announcements;