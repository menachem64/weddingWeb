"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Blessings.module.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Blessings = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section id="projects">
      <h2 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 md:mb-12">
         ברכות ואיחולים
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000, //10000 milliseconds (10 seconds)
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, /*Pagination,*/ Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={styles.swiperSlide}
      >
        <SwiperSlide><div className="bg-white  text-center justify-center p-2 h-[300px] mx-[150px] shadow-2xl rounded-3xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
          <h1 className="text-3xl p-1 font-bold bg-clip-text bg-gradient-to-r text-slate-500 hover:text-slate-600 m-4 ">בבית משפחת  הרטמןמן הרטמןמן הרטמןמן הרטמןמן הרטמןמן הרטמןמן הרטמןמן הרטמןמבית משפחת  הרטמןמן הרטמןמן הרטמןמן הרטמןמן הרטמןמן הרטמןמן הרטמןמן הרטמןמ בית משפחת  הרטמןמן הרטמןמן הרטמןמן הרטמןמן הרטמןמן הרטמןמן הרטמןמן הרטמןמן</h1>
        </div></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
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

export default Blessings;
