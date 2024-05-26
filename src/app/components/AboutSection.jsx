"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "שבת כלה",
    id: "ShabatSevaBrachot",
    content: (
      // <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-8 md:mb-12">B בביתר עלית גבעה</p>
      <div className="bg-[#cd9484]  text-center justify-end p-2 mx-[10px] shadow-2xl rounded-3xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <h1 className="text-3xl font-bold  text-slate-100 hover:text-slate-100  m-4">בביתר עלית רח&apos; החוזה מלובלין</h1>
      </div>
    ),
  },
  {
    title: "אופרוף",
    id: "ShabetChatan",
    content: (
      // <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-8 md:mb-12">על יד אוהל כ"ק אדמו"ר</p>
      <div className="bg-[#cd9484]  text-center justify-end p-2 mx-[10px] shadow-2xl rounded-3xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
       <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-r  text-slate-100 hover:text-slate-100 m-4">על יד אוהל כ&quot;ק אדמו&quot;ר</h1>
    </div>
    ),
  },
  {
    title: "שבת שבע ברכות",
    id: "Shabatkala",
    content: (
      // <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-8 md:mb-12">בבית משפחת הרטמן</p>
      <div className="bg-[#cd9484]  text-center justify-end p-2 mx-[10px] shadow-2xl rounded-3xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
      <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-r  text-slate-100 hover:text-slate-100 m-4 ">בבית משפחת הרטמן</h1>
   </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Shabatkala");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.7900025651984!2d34.86726042607474!3d31.993707723607045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502caa7c87cf23d%3A0x670cb3df33138ab0!2z15DXldec150g15DXmdeo15XXoteZ150g15HXmdeqINeo15HXp9eUINeb16TXqCDXl9eR15M!5e0!3m2!1siw!2sil!4v1715621747233!5m2!1siw!2sil"
          className="hidden md:block w-[330px] h-[330px] md:w-[360] md:h-[360] xl:w-[400px] xl:h-[400px] border shadow-xl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="mt-4 mb-7 md:mt-0 md:mb-0 flex flex-col h-full text-right">
          <h2 className="text-4xl font-bold bg-clip-text bg-gradient-to-r text-[#B48B58] mb-4">.החתונה שלנו</h2>
          <p className="text-[#8B716A] mb-8 md:mb-0 font-bold lg:text-xl">
          בעזרת השם ביום שלישי שהוכפל בו כי טוב י&apos; תמוז ה&apos;תשפ&quot;ד בשעה שש בערב
                נחגוג בגן האירועים בבית רבקה אשר בכפר חב&quot;ד ב&apos; את החתונה 
                ואנחנו מצפים ומחכים לפגוש אתכם באירוע,
                מצורף כאן המיקום של האולם בגוגל מפות
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.7900025651984!2d34.86726042607474!3d31.993707723607045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502caa7c87cf23d%3A0x670cb3df33138ab0!2z15DXldec150g15DXmdeo15XXoteZ150g15HXmdeqINeo15HXp9eUINeb16TXqCDXl9eR15M!5e0!3m2!1siw!2sil!4v1715621747233!5m2!1siw!2sil"
            className="block md:hidden w-[240px] h-[200px] md:w-[400px] md:h-[400px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className="flex flex-row justify-end text-[13px] text-center md:text-xl md:text-end mt-20 w-auto">
            <TabButton
              selectTab={() => handleTabChange("ShabatSevaBrachot")}
              active={tab === "ShabatSevaBrachot"}
            >
              {" "}
              שבת שבע ברכות{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("ShabetChatan")}
              active={tab === "ShabetChatan"}
            >
              {" "}
             שבת חתן{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Shabatkala")}
              active={tab === "Shabatkala"}
            >
              {" "}
              שבת כלה{" "}
            </TabButton>
          </div>
          <div className="mt-4 ml-0 md:ml-10 text-right">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
