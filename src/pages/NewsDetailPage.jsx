// src/pages/NewsDetailPage.jsx
import { useParams, Navigate } from 'react-router-dom';
import { newsData } from '../data/newsData';

const NewsDetailPage = () => {
  const { newsId } = useParams();
  
  // แปลง newsId เป็นตัวเลขเพื่อใช้ค้นหา
  const id = parseInt(newsId);
  
  // ค้นหาข้อมูลข่าวที่ตรงกับ ID
  const newsItem = newsData.find(item => item.id === id);

  if (!newsItem) {
    // ถ้าไม่พบข่าว ให้ Redirect ไปที่หน้า 404 หรือหน้ารวมข่าว
    return <Navigate to="/news" replace />; 
  }

  return (
    <div className="page-content news-detail">
      <img src={newsItem.imageUrl} alt={newsItem.title} className="detail-image" />
      <h1>{newsItem.title}</h1>
      <p className="detail-date">🗓️ วันที่ประกาศ: **{newsItem.date}**</p>
      <hr />
      <div className="news-content">
        {/* อาจใช้ dangerouslySetInnerHTML ถ้าเนื้อหามาจาก CMS และมี tag HTML */}
        <p style={{ whiteSpace: 'pre-wrap' }}>{newsItem.content}</p>
      </div>
    </div>
  );
};

export default NewsDetailPage;