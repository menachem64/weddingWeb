"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-fullbg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/logo.jpg"
              alt="appointment image"
              className="relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" //ml-[400px] mt-[5px]"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="col-span-8 ml-[100px] place-self-center text-center sm:text-left justify-self-star"
           style={{ direction: 'rtl' }} // נוסיף סגנון ישיר באמצעות ה-attribute style
        >
      <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
      החתונה של מענדי וחני
    </span>
        <br></br>
        <TypeAnimation
          sequence={[
           "י' תמוז ה'תשפד",
          1000,
           "16/07/2024",
          1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="ml-[170px] text-right"
          style={{ direction: 'rtl' }} // הוספת כיוון הכתיבה
     />

  </h1>
  <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-right font-semibold">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">החתונה </span> 
    אתר החתונה הרשמי של מענדי וחני
  </p>
  <div className="text-right">
    <Link
      href="/#contact"
      className="ml-3 px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
    >
      שלח לנו ברכה
    </Link>
    <Link
      href="https://www.google.com/calendar/render?action=TEMPLATE&text=החתונה של חני ומענדי&dates=20240716T190000Z%2F20240716T230000Z"
      className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
    >
      <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
        שמור ביומן
      </span>
    </Link>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
