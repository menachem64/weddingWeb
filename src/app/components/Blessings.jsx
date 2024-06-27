"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Blessings.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BlessingsPage = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const Blessings = [

     {
      text: "סודאק היקר, אחי, הגיע הרגע! סוף סוף אתה נכנס לסטטוס של נשוי. מי היה מאמין? נראה כאילו רק אתמול היינו מעבירים לילות שלמים ביחד, צוחקים על כל שטות ומעבירים את הסדרים. אנחנו מאחלים לך חיים מלאים באהבה, אושר ושטות בריאה. שתמשיך להיות הבן אדם המיוחד שאתה ולהפיץ אור בכל מקום. אז תתחתן בכיף, תשמח, תרקוד, ותזכור שהחיים רק מתחילים! אוהבים ומעריכים תמיד",
      textSize: "text-[7px] md:text-[12px] xl:text-xl",
      backgroundColor: "#B48B58",
      from: "החברים לדירת התלמידים השלוחים",
      fromSize: "text-[9px] md:text-xl lg:text-2xl"
    },
    {
      text: "מזל טוב מזל טוב אושר ועושר הצלחה בכל",
      textSize: "text-xs md:text-2xl xl:text-3xl",
      backgroundColor: "#8B716A",
      from: "הדס",
      fromSize: "text-lg md:text-xl"
    },
    {
      text: "ביום הגדול הזה אנו שמחים לברך אתכם, תהיו מאושרים כמו שאתם, ויהיו ימיכם מלאים בברכה שלום ושפע",
      textSize: "text-xs md:text-2xl xl:text-3xl",
      backgroundColor: "#B48B58",
      from: "חיים ויצחק",
      fromSize: "text-lg md:text-xl"
    },
    // {
    //   text: "מזל טוב לחני ומענדי! שתזכו לחיים מתוקים כמו הדבש, ולבנין עדי עד, בית של שלום ושמחה ונחת ",
    //   textSize: "text-xs md:text-2xl xl:text-3xl",
    //   backgroundColor: "#cd9484",
    //   from: "יוסל'ה",
    //   fromSize: "text-lg md:text-xl"
    // },
    {
      text: "מזל טוב!! ברגע זה שבו הקיץ משתיק את קולו והלב רוקד בחופש, תהיה כל רגע בו כמו תרגיל בשורות אינסופיות של פואמות מרגשות",
      textSize: "text-xs md:text-2xl xl:text-3xl",
      backgroundColor: "#cd9484",
      from: "רבקה ליפסקר",
      fromSize: "text-lg md:text-xl"
    },
  ];

  return (
    <section id="blessings" className="mt-5 md:mt-0">
      <h2 className="text-center text-4xl md:text-5xl font-bold bg-clip-text bg-gradient-to-r text-[#B48B58] mt-4 mb-8 md:mb-12">
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
            <div
              className="flex flex-col text-center justify-center items-center px-5 py-0 h-[170px] w-auto md:w-auto md:h-[300px] md:mx-[150px] shadow-2xl rounded-3xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{ background: blessing.backgroundColor }}
            >
              <h1 className={`${blessing.textSize} px-[25px] py-[10px] md:p-1 font-bold bg-clip-text bg-gradient-to-r text-slate-100 hover:text-slate-200 m-2 md:m-4`}>
                {blessing.text}
                <span className={`${blessing.fromSize} block mt-4`}>{blessing.from}</span>
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
