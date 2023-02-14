import Link from "next/link";
import React, { useState } from "react";

const links = [
  { href: "/projects", name: "Projects" },
  { href: "/about", name: "About" },
  { href: "/contact", name: "Contact" },
  { href: "/news", name: "News" },
  { href: "/clients", name: "Clients" },
];

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="fixed top-0 z-[100] mt-10 w-full">
      <div className="hidden flex-row-reverse p-10 md:flex">
        <div className="bg-[#282928] drop-shadow-lg">
          <div className="-pb-5 p-5 uppercase">
            <h1 style={{ letterSpacing: 5 }} className="text-4xl text-[#fff]">
              ArcelDesign, Inc.
            </h1>
            <p
              style={{ letterSpacing: 5 }}
              className="mb-5 text-center text-xl text-[#838383]"
            >
              Interior Design + Build
            </p>
            <div className="flex items-center justify-center space-x-3 text-[#fff]">
              {links.map((link) => (
                <div
                  key={link.name}
                  className="text-md p-1 pb-1 hover:text-[#838383]"
                >
                  <Link href={link.href}>
                    <button>{link.name}</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger */}
      <div className="-mt-10 flex flex-row items-center justify-center bg-[#282928] px-10 md:hidden">
        <div className="w-full  pt-5 drop-shadow-lg">
          <div className="uppercase">
            <h1 style={{ letterSpacing: 5 }} className="text-xl text-[#fff]">
              ArcelDesign, Inc.
            </h1>
            <p
              style={{ letterSpacing: 5 }}
              className="mb-5 text-xs text-[#838383]"
            >
              Interior Design + Build
            </p>
            {/* <div className="flex items-center justify-center space-x-3 text-[#fff]">
              {links.map((link) => (
                <div
                  key={link.name}
                  className="text-md p-1 pb-3 hover:text-[#838383]"
                >
                  <Link href={link.href}>
                    <button>{link.name}</button>
                  </Link>
                </div>
              ))}
            </div> */}
          </div>
        </div>
        <button>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
