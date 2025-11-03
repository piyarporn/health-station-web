// src/pages/NewsPage.jsx
import React from 'react';
import { Calendar, User, Tag } from 'lucide-react'; // ไอคอนสำหรับรายละเอียดข่าว

// ข้อมูลข่าวตัวอย่าง
const dummyNews = [
  {
    id: 1,
    title: 'ประกาศ: เชิญชวนฉีดวัคซีนไข้หวัดใหญ่ประจำปี 2568',
    date: '25 ตุลาคม 2568',
    author: 'งานบริการสุขภาพ',
    category: 'วัคซีน',
    content: 'รพ.สต. กุดน้ำใส ขอเชิญชวนกลุ่มเสี่ยงเข้ารับการฉีดวัคซีนไข้หวัดใหญ่ฟรี! ตั้งแต่วันที่ 1-30 พ.ย. 2568 ณ ห้องบริการสุขภาพ...',
    imageUrl: 'https://via.placeholder.com/600x400?text=Vaccine+Announcement' // รูปภาพประกอบข่าว
  },
  {
    id: 2,
    title: 'ตารางแพทย์ออกตรวจประจำเดือนพฤศจิกายน',
    date: '20 ตุลาคม 2568',
    author: 'งานธุรการ',
    category: 'ตารางบริการ',
    content: 'สามารถตรวจสอบตารางการออกตรวจของแพทย์และบุคลากรสาธารณสุขได้ที่นี่ หรือที่บอร์ดประชาสัมพันธ์ของ รพ.สต. กุดน้ำใส...',
    imageUrl: 'https://via.placeholder.com/600x400?text=Doctor+Schedule'
  },
  {
    id: 3,
    title: 'กิจกรรมส่งเสริมสุขภาพดี: เดิน-วิ่งเพื่อสุขภาพ',
    date: '10 ตุลาคม 2568',
    author: 'งานส่งเสริมสุขภาพ',
    category: 'กิจกรรม',
    content: 'ขอเชิญชวนประชาชนร่วมกิจกรรมเดิน-วิ่ง ในวันเสาร์ที่ 15 พ.ย. 2568 เพื่อส่งเสริมการออกกำลังกายและสุขภาพที่ดีในชุมชน...',
    imageUrl: 'https://via.placeholder.com/600x400?text=Health+Activity'
  },
];

// Component สำหรับแสดงการ์ดข่าว
const NewsCard = ({ news }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-xl">
    <img className="w-full h-48 object-cover" src={news.imageUrl} alt={news.title} />
    <div className="p-5">
      <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-cyan-600 transition duration-150 cursor-pointer">
        {news.title}
      </h3>
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
        <span className="flex items-center">
          <Calendar className="w-4 h-4 mr-1 text-cyan-500" />
          {news.date}
        </span>
        <span className="flex items-center">
          <User className="w-4 h-4 mr-1 text-cyan-500" />
          {news.author}
        </span>
      </div>
      <p className="text-gray-600 text-base mb-4 line-clamp-2">
        {news.content}
      </p>
      <div className="flex justify-between items-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">
          <Tag className="w-3 h-3 mr-1" />
          {news.category}
        </span>
        <a 
          href="#" 
          className="text-cyan-600 hover:text-cyan-800 font-medium text-sm transition duration-150"
        >
          อ่านต่อ &rarr;
        </a>
      </div>
    </div>
  </div>
);

// Component หน้าประกาศข่าวทั้งหมด
const NewsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* ส่วนหัวหน้า */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            <span className="text-cyan-600">📢</span> ประกาศข่าวสาร
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            ข้อมูลและกิจกรรมล่าสุดจาก รพ.สต. กุดน้ำใส เพื่อสุขภาพที่ดีของชุมชน
          </p>
        </div>

        {/* ส่วนแสดงรายการข่าว */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
          {/* เพิ่มข่าวอื่นๆ */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center mt-8">
             <button className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 transition duration-300">
                ดูประกาศข่าวทั้งหมด
             </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsPage;