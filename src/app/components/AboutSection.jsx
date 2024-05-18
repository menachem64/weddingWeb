"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "שבת כלה",
    id: "createdWith",
    content: (
      // <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-8 md:mb-12">B בביתר עלית גבעה</p>
      <div className="bg-white  text-center justify-center p-2 mx-[100px] shadow-2xl rounded-3xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
        <h1 className="text-3xl font-bold  text-slate-500 hover:text-slate-600  mt-4">בביתר עלית</h1>
        <h1 className="text-3xl font-bold text-slate-500 hover:text-slate-600  mb-4">B גבעה</h1>
      </div>
    ),
  },
  {
    title: "אופרוף",
    id: "creationModel",
    content: (
      // <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-8 md:mb-12">על יד אוהל כ"ק אדמו"ר</p>
      <div className="bg-white  text-center justify-center p-2 mx-[100px] shadow-2xl rounded-3xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
       <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-r text-slate-500 hover:text-slate-600 m-4">על יד אוהל כ"ק אדמו"ר</h1>
    </div>
    ),
  },
  {
    title: "שבת שבע ברכות",
    id: "cloudHosting",
    content: (
      // <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-8 md:mb-12">בבית משפחת הרטמן</p>
      <div className="bg-white  text-center justify-center p-2 mx-[100px] shadow-2xl rounded-3xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
      <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-r text-slate-500 hover:text-slate-600 m-4 ">בבית משפחת הרטמן</h1>
   </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("createdWith");
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
            width="500" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="mt-4 md:mt-0 flex flex-col h-full text-right">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-4">.החתונה שלנו</h2>
          <p className="text-base lg:text-lg">
                בעזרת השם ביום שלישי שהוכפל בו כי טוב י' תמוז ה'תשפ"ד
                נחגוג בגן האירועים בית רבקה אשר בכפר חב"ד ב את החתונה של חני ומענדי
                החופה תחל בשעה שבע בערב לקול שירת הניגון ד' בבות 
                וביחד נעמיד בית חדש בישראל, זה אירוע חשוב ומרגש מאוד 
                ואנחנו ממש מצפים ומחכים כבר לפגוש אתכם באירוע שלנו,
                מצורף כאן המיקום של האולם בגוגל מפות
          </p>
          <div className="flex flex-row justify-center mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("createdWith")}
              active={tab === "createdWith"}
            >
              {" "}
              שבת שבע ברכות{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("creationModel")}
              active={tab === "creationModel"}
            >
              {" "}
             שבת חתן{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("cloudHosting")}
              active={tab === "cloudHosting"}
            >
              {" "}
              שבת כלה{" "}
            </TabButton>
          </div>
          <div className="mt-8 ml-10 text-right">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
