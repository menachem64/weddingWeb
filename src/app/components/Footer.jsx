import React from "react";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="footer font-bold mt-[40px] border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-[#8B716A]">
      <div className="container p-4 flex justify-between">
        <p className="hidden md:block text-slate-600">Create by mendy sodakevitz @All rights reserved.</p>
        <p className="block md:hidden text-slate-600 font-bold">!מזל טוב</p>
        <div className="flex flex-col-2 items-center space-x-3 text-2xl">
       {/*  <span className="hidden md:inline">החתונה של מענדי וחני</span>
          <Image
              src="/images/logo.jpg"
              alt="wedding icon"
              width={40}
              height={40}
            /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
