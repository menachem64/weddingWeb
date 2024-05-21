"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useState, useEffect } from 'react';


const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);


const AchievementsSection = () => {

  const targetDate = new Date('2024-07-16T18:00:00');
  const [timeLeft, setTimeLeft] = useState(
    Math.floor((targetDate.getTime() - Date.now()) / 1000)
  );
  const [animationStarted, setAnimationStarted] = useState(true);


useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = Math.floor((targetDate.getTime() - Date.now()) / 1000);
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
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-4 md:mb-12">
      :החתונה תערך בעוד
      </h2>
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
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
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
