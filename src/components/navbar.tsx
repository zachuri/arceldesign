import Link from "next/link";
import React from "react";

const links = [
  { href: "/projects", name: "Projects" },
  { href: "/about", name: "About" },
  { href: "/contact", name: "Contact" },
  { href: "/news", name: "News" },
  { href: "/clients", name: "Clients" },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[100] mt-10 w-full">
      <div className="flex flex-row-reverse p-10">
        <div className="bg-[#282928] drop-shadow-lg backdrop-blur-lg">
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
    </div>
  );
};

export default Navbar;
