"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";


const PetelBoldFont = '/PetelBold.ttf';

const HeroSection = () => {

  return (
    <section className="lg:py-16">
    <div className="grid grid-cols-1 sm:grid-cols-12 mt-0 md:mt-2 md:ml-5">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 sm:col-span-4 place-self-center mt-4 sm:mt-0 text-center sm:text-left"
        >
          <div className="rounded-full w-[250px] h-[200px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] xl:w-[400px] xl:h-[300px] mt-7 sm:mt-10 lg:mt-0 mx-auto sm:mx-0 mb-0 md:mb-10">
  <Image
    src="/weddingLogo2.png"
    alt="logo image"
    className="relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mb-0"
    width={500}
    height={400}
  />
</div>



        </motion.div>
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 sm:col-span-8 mt-0 sm:mt-0 place-self-center text-center sm:text-left"
        >
            {/* <h1 className="font-sans bg-clip-text bg-gradient-to-r text-[#B48B58] block">
    החתונה של מענדי וחני
</h1> */}
 <div className="relative h-[150px] md:h-auto ml-0 mt-3 md:mt-0 md:ml-[250px] text-white mb-4 font-bold">
      <Image
        src="/title.png"
        alt="title"
        className=""
        width={400}
        height={400}
      />
      <div className="absolute inset-0 flex items-center justify-center text-4xl m-0 mt-[160px] md:mt-[150px] md:mr-[180px] sm:text-5xl xl:text-8xl">
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
          className="font-sans text-[#D3836D] text-center md:text-right whitespace-nowrap mb-0 md:mb-[100px] lg:mb-0"
          style={{ direction: 'rtl' }}
        />
      </div>
    </div>
            {/* <div className={PetelBoldFont}>
            <p className="text-end font-bold  text-[#8B716A] text-lg mb-6 lg:text-3xl">
                <span className="text-transparent ml-1 bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                    החתונה 
                </span> 
                .אתר החתונה של מענדי וחני
            </p>
            </div> */}
             <div className="flex flex-row items-center mt-[60px] md:m-0">
                <Link
                    href="/#contact"
                    className="inline-block font-bold px-6 py-3 rounded-full bg-gradient-to-br bg-[#8B716A] hover:bg-[#7a6058] text-white mr-4 mt-0 md:mt-3"
                >
                    איחולים
                </Link>
                <Link
      href="https://www.google.com/calendar/render?action=TEMPLATE&text=החתונה של חני ומענדי&dates=20240716T190000Z%2F20240716T230000Z"
      className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br bg-[#8B716A] hover:bg-slate-800 text-white mt-0 md:mt-3"
    >
      <span className=" font-bold block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
        לשמור ביומן
      </span>
    </Link>
            </div> 
        </motion.div>
    </div>
</section>
   );
};

export default HeroSection;
