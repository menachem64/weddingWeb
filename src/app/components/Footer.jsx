import React from "react";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="footer mt-[70px] border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-8 flex justify-between">
        <p className="text-slate-600">Create by mendy sodakevitz @All rights reserved.</p>
        <div className="flex flex-col-2 items-center space-x-3">
        <span>החתונה של חני ומענדי</span>
          <Image
              src="/images/logo.jpg"
              alt="wedding icon"
              width={40}
              height={40}
            />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
