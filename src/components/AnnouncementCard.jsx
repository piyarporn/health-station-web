import React from 'react';
import './AnnouncementCard.css';

function AnnouncementCard({ data }) {
  const cardClass = data.isUrgent ? "announcement-card urgent" : "announcement-card";

  return (
    <div className={cardClass}>
      <div className="card-header">
        {data.isUrgent && <span className="urgent-tag">📢 ด่วน!</span>}
        <span className="category-tag">[{data.category}]</span>
      </div>
      
      <h3>{data.title}</h3>
      <p className="card-date">
        วันที่: {new Date(data.date).toLocaleDateString('th-TH')}
      </p>

      <p>{data.content.substring(0, 150)}...</p>

      {data.link && (
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more-link"
        >
          อ่านฉบับเต็ม ➡️
        </a>
      )}
    </div>
  );
}

export default AnnouncementCard;
