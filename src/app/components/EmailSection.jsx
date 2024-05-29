"use client";
import React, { useState } from "react";
import GmailIcon from "../../../public/gmail-icon.svg";
import zelleIcon from "../../../public/zelle-icon.svg";
//import LinkedinIcon from "../../../public/linkedin-icon.svg";
//import LinkedinIcon from "../../../public/linkedin-icon.svg";

import Link from "next/link";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

      setisLoading(true);
      try{
        const response = await fetch(endpoint, options);
        if (response.ok) {
          const resData = await response.json();
          console.log("Message sent.");
          toast.success("Message sent successfully!");
          setEmailSubmitted(true);
        } else {
          toast.error("Failed to send message");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong");
      } finally {
       setisLoading(false);
     }

  };

  return (
    <section
      id="contact"
      className="block md:grid md:grid-cols-2 my-2 md:mt-12 pt-24 gap-4 relative"
    >
      <div>
         <div className="block md:hidden text-center justify-center">
        <h5 className="text-xl font-bold text-[#B48B58] my-2">
          !תכתבו לנו ברכה
        </h5>
        <p className="text-[#ADB7BE] mb-6 md:mb-0 font-bold text-xl lg:text-lg">
          {" "}
           נשמח מאוד לקבל את ברכתכם ובעז&quot;ה נפרסם את כל הברכות כאן באתר, אפשר לשלוח לנו כאן גם שאלות ועדכונים
        </p>
        <div className="socials flex flex-row gap-2 items-start">
        <Link href="https://gmail.com">
            <Image src={GmailIcon} alt="gmail Icon" width={50}/>
          </Link>
        </div>
        </div>
        {emailSubmitted ? (
          <p className="text-green-500 text-2xl mt-2 font-semibold">
            !הברכה שלכם נשלחה 
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-[#B48B58] font-medium text-right block mb-2 text-sm "
              >
               מאת
              </label>
              <input
                name="name"
                type="name"
                id="name"
                required
                className="font-medium text-right bg-[#f9f9f9] border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg block w-full p-2.5"
                placeholder="השם שלכם"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-right text-[#B48B58] block mb-2 text-sm font-medium"
              >
                מייל או מספר הפאלפון 
              </label>
              <input
                name="email"
                type="text"
                id="email"
                required
                className="text-right bg-[#f9f9f9] border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg block w-full p-2.5"
                placeholder="blessing@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-right text-[#B48B58] block text-sm mb-2 font-medium"
              >
                נושא
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="text-right bg-[#f9f9f9] border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg block w-full p-2.5"
                placeholder="...'ברכה / עדכון / שאלה וכד"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-right text-[#B48B58] block text-sm mb-2 font-medium"
              >
                טקסט
              </label>
              <textarea
                name="message"
                type="text"
                id="message"
                required
                className="text-right bg-[#f9f9f9] border border-[#33353F] placeholder-[#9CA2A9] text-gray-800 text-sm rounded-lg block w-full p-2.5"
                placeholder="אם אתם רוצים שנפרסם באתר אז עד עשרים מילים"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center font-bold bg-[#cd9484] hover:bg-[#ab7566] text-white py-2.5 px-5 rounded-lg w-full"
            >
              {isLoading && <Loader2 className="h-4 w-4 animate-spin"/>
               ||  "שליחה"}
            </button>
          </form>
        )}
      </div>
      {/* <div className="z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D3836D] to-transparent rounded-full h-80 w-80 blur-lg absolute bottom-4 right-4 transform translate-x-1/2 translate-y-1/2"></div> */}
      <div className="z-10 text-right">
        <div className="hidden md:block">
        <h5 className="text-3xl font-bold text-[#B48B58] my-2">
          !תכתבו לנו ברכה
        </h5>
        <p className="text-[#8B716A] mb-4 max-w-md ml-[150px] font-bold text-2xl">
          {" "}
           נשמח מאוד לקבל את ברכתכם ובעז&quot;ה נפרסם את כל הברכות כאן באתר, אפשר לשלוח לנו כאן גם שאלות ועדכונים
        </p>
        <div className="socials flex flex-row gap-2 justify-end">
        <Link href="https://gmail.com">
            <Image src={GmailIcon} alt="gmail Icon" width={50}/>
          </Link>
         {/*  <Link href="https://github.com/menachem64">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link> */}
        </div>
        </div>
        <div>
        <p className="text-[#8B716A] text-xl font-bold text-end justify-end md:text-end md:justify-end mb-4 max-w-md ml-0 mt-[60px] md:ml-[150px] md:mt-[200px]">
        {" "}ניתן לשלוח לנו ברכות  
        
          <span className="block">(; bit או zelleגם ב</span>
         </p>
        <div className="socials block md:flex md:flex-row md:gap-2 justify-end">
        <div className="socials flex flex-row gap-2 justify-end md:mt-0">
        <p className="text-[#8B716A] mt-5 text-xs md:text-sm xl:text-xl font-bold">0547611046</p>
            <Image src="/bit-icon.png" alt="gmail Icon" width={50} height={50}/>
          </div>
          <div className="socials flex flex-row gap-2 justify-end">
            <p className="text-[#8B716A] mt-5 text-xs mdmd:text-sm xl:text-xl font-bold">mnsudak@gmail.com</p>
            <Image src={zelleIcon} alt="zelle Icon" className="block md:flex" width={50} height={50}/>
          </div>
         </div>
        </div>
      </div>
   
    </section>
  );
};

export default EmailSection;
