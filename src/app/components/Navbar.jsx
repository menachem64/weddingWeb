"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "צרו קשר",
    path: "#contact",
  },
  {
    title: "הזמנה",
    path: "#projects",
  },
  {
    title: "מיקום",
    path: "#about",
  },
  {
    title: "איחולים",
    path: "#blessings",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border top-0 left-0 right-0 bg-[#9a8079] bg-opacity-100 z-20">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={"/"}
          className="hidden md:flex flex-col-2 text-xl text-white font-semibold"
        >
          <p className="mr-3">החתונה של מענדי וחני</p>
          {/* <Image
            src="/images/logo.jpg"
            alt="professionals icon"
            width={30}
            height={30}
          /> */}
        </Link>
        <div className="mobile-menu block md:hidden w-full">
          {!navbarOpen ? (
            <div className="flex justify-between items-center w-full">
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-start px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
              <p className="text-xl text-white font-semibold text-end">החתונה שלנו</p>
            </div>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
