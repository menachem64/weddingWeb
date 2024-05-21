"use client";
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Blessings.module.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BlessingsPage = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const Blessings = [
    {
      text: " מזל טוב לחני ומענדי! שתזכו לחיים מתוקים כמו הדבש, אהבה עמוקה כמו האוקיינוס, ושלום ושמחה שישרים כמו הרים",
      backgroundColor: "radial-gradient(circle, rgba(255,229,229,1) 0%, rgba(255,182,193,1) 50%, rgba(255,105,97,1) 100%)",
      from: "ChatGPT 3.5"
    },
    { 
      text: "מזל טוב!! ברגע זה שבו הקיץ משתיק את קולו והלב רוקד בחופש, מתחילים אתם את סיפור האהבה המופלא שלכם. תהיה כל רגע בו כמו תרגיל בשורות אינסופיות של פואמות מרגשות",
      backgroundColor: "radial-gradient(circle, rgba(229,229,255,1) 0%, rgba(179,179,255,1) 50%, rgba(97,97,255,1) 100%)",
      from: "רבקה ליפסקר"
    },
    {
      text: "🎂🥂💕!מזל טוב לחני ומענדי! ברכות חמות לכם. תחיו את הרגעים המיוחדים, תקשיבו ללב ותמשיכו להפתח יחד באהבה וכבוד. שתהיה לכם חיים מתוקים כמו עוגת חתונה",
      backgroundColor: "radial-gradient(circle, rgba(229,255,229,1) 0%, rgba(179,255,179,1) 50%, rgba(97,255,183,1) 100%)",
      from: "Copilot"
    },
    {
      text: "ביום הגדול הזה, כשהשמש זורחת והלב פועם בגאווה, אנו שמחות לברך אתכם באהבה ובשמחה. תהיו מאושרים כמו שאתם, ויהיו ימיכם מלאים באהבה, שלום ושפע",
      backgroundColor: "radial-gradient(circle, rgba(255,255,229,1) 0%, rgba(255,255,179,1) 50%, rgba(255,223,97,1) 100%)",
      from: "רישי ושרי ליפסקר"
    }
  ];

  return (
    <section id="blessings mt-5 md:mt-0">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 md:mb-12">
        ברכות ואיחולים
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000, // 10000 milliseconds (10 seconds)
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={styles.swiper}
      >
        {Blessings.map((blessing, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col text-center justify-center items-center px-5 h-[230px] w-[280px] md:w-auto md:h-[300px] md:mx-[150px] shadow-2xl rounded-3xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl" style={{ background: blessing.backgroundColor }}>
              <h1 className="text-sm md:text-3xl p-1 font-bold bg-clip-text bg-gradient-to-r text-slate-800 hover:text-slate-600 m-4">
                {blessing.text}
                <span className="block mt-4 text-lg md:text-xl">{blessing.from}</span>
              </h1>
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.autoplayProgress} slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
};

export default BlessingsPage;
