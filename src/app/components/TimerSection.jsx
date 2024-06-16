"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useState, useEffect } from 'react';
import * as moment from 'moment';
import 'moment-timezone';

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);


const TimerSection = () => {

  // הגדר את אזור הזמן של תל אביב
  const telAvivTime = moment().tz('Asia/Jerusalem');

  const targetDate = moment.tz('2024-07-16T18:00:00', 'Asia/Jerusalem');
  //const targetDate = telAvivTime.format('2024-07-16T18:00:00');
  const [timeLeft, setTimeLeft] = useState(
    Math.floor((targetDate.toDate().getTime() - telAvivTime.toDate().getTime()) / 1000)
  );
  const [animationStarted, setAnimationStarted] = useState(true);


useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = Math.floor((targetDate.toDate().getTime() - telAvivTime.toDate().getTime()) / 1000);
      setTimeLeft(newTimeLeft);
      console.log("timeLeft:", timeLeft);
    }, 1000);

    return () => clearInterval(interval);
}, [targetDate]);

useEffect(() => {
  const interval = setInterval(() => {
        setAnimationStarted(false);
     
}, 1000);

}, []);

const weeks = Math.floor(timeLeft / (3600 * 24) / 7)
const days = Math.floor(timeLeft / (3600 * 24));
const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
const minutes = Math.floor((timeLeft % 3600) / 60);
const seconds = timeLeft % 60;


const achievementsList = [
  // {
  //   metric: "Service Professionals",
  //   value: "100",
  //   postfix: "+",
  // },
  // {
  //   metric: "שבועות",
  //   value: `${weeks}`,
  // },
  {
    metric: "ימים",
    value: `${days}`,
  },
  {
   // prefix: "~",
    metric: "שעות",
    value:`${hours}`,
  },
  {
    metric: "דקות",
    value: `${minutes}`,
  },
  {
    metric: "שניות",
    value: `${seconds}`,
  },
];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-5 mb-[60px] md:mb-0 md:mt-0">
      <h2 className="text-center text-3xl md:text-5xl font-bold bg-clip-text bg-gradient-to-r text-[#8B716A] mt-8 mb-8 md:mt-6 md:mb-12">
      :החתונה תערך בעוד
      </h2>
      <div className="bg-[#cd9484] #D3836D rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
                {animationStarted ? (
                <h2 className="text-white text-4xl font-bold flex flex-row">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-4xl font-bold"
                    configs={(_, index) => ({
                      mass: 1,
                      friction: 30,
                      tensions: 40 * (index + 1),
                    })}
                  />
                  {achievement.postfix}
                </h2>
              ) : (
                <h2 className="text-white text-4xl font-bold flex flex-row">
                  {parseInt(achievement.value)}
                  {achievement.postfix}
                </h2>
              )}
              <p className="text-white text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimerSection;
