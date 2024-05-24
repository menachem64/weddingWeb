'use client';

import React from 'react';
import styles from './FlipCard.module.css'

const FlipCard = () => {

  return (
    <section id="projects">
      <div className='block md:flex col-2 mb-[100px]'>

        <h2 className="block md:hidden text-center justify-center text-4xl md:text-8xl font-bold bg-clip-text bg-gradient-to-r text-[#B48B58] mb-0 md:mb-12">
          ההזמנה לחתונה
        </h2>
        <div className="flex justify-center">
          <div className={styles.wrapper}>
            <div className={`${styles.lid} ${styles.one}`}></div>
            <div className={`${styles.lid} ${styles.two}`}></div>
            <div className={styles.letter}>
              <img src={"/invitation.jpeg"} alt="invitation Image" className="h-[200px] md:h-[250px] w-[800px]" />
            </div>
            <div className={styles.envelope}></div>
          </div>
        </div>

        <div>
          <h2 className="hidden xl:block text-center justify-center mt-[100px] text-4xl md:text-8xl font-bold bg-clip-text bg-gradient-to-r text-[#B48B58] mb-0 md:mb-12 text-shadow">
            ההזמנה 
            <span className='block mt-4'>לחתונה</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FlipCard;
