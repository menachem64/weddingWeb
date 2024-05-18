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
          toast.success("Email sent successfully!");
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
      className="grid md:grid-cols-2 my-12 md:mt-12 pt-24 gap-4 relative"
    >
         <div className="text-right">
        {emailSubmitted ? (
          <p className="text-green-500 text-2xl mt-2 font-semibold">
            !הברכה שלכם נשלחה 
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
               השם שלכם
              </label>
              <input
                name="name"
                type="name"
                id="name"
                required
                className="text-right bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="שם"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-right text-white block mb-2 text-sm font-medium"
              >
                מייל או מספר הפאלפון 
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="text-right bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="blessing@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-right text-white block text-sm mb-2 font-medium"
              >
                כותרת
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="text-right bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="!מזל טוב"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-right text-white block text-sm mb-2 font-medium"
              >
                ברכה
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="text-right bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="(אם אתם רוצים שנפרסם באתר אז עד שלושים מילים)...מלא ברכות"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {isLoading && <Loader2 className="h-4 w-4 animate-spin"/>
               ||  "שלח ברכה"}
            </button>
          </form>
        )}
      </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 text-right">
        <h5 className="text-xl font-bold text-white my-2">
          !תכתבו לנו ברכה
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md ml-[150px]">
          {" "}
           נשמח מאוד לקבל את ברכתכם ובעז"ה נפרסם את כל הברכות כאן באתר, אפשר לשלוח לנו כאן גם שאלות ועדכונים
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
        <div>
        <p className="text-[#ADB7BE] mb-4 max-w-md ml-[150px] mt-[200px]">
          {" "} (; bit או zelleניתן לשלוח לנו ברכות גם ב       </p>
        <div className="socials flex flex-row gap-2 justify-end">
        <div className="socials flex flex-row gap-2 justify-end">
            <p className="text-[#ADB7BE] mt-5">0547611046</p>
            <Image src="/bit-icon.png" alt="gmail Icon" width={50} height={50}/>
          </div>
          <div className="socials flex flex-row gap-2 justify-end">
            <p className="text-[#ADB7BE] mt-5">mnsudak@gmail.com</p>
            <Image src={zelleIcon} alt="zelle Icon" width={50} height={50}/>
          </div>
         </div>
        </div>
      </div>
   
    </section>
  );
};

export default EmailSection;
