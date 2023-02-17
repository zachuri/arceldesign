import Link from "next/link";
import React from "react";
import NavbarMobile from "./navbar-mobile";

const links = [
  { href: "/projects", name: "Projects" },
  { href: "/about", name: "About" },
  { href: "/contact", name: "Contact" },
  { href: "/news", name: "News" },
  { href: "/clients", name: "Clients" },
];

const Navbar = () => {
  return (
    // Navbar for Desktop Screens
    <div className="fixed top-0 z-[100] w-full">
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
            <div className="flex items-center justify-center space-x-3 text-[#CFCCC9]">
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

      {/* Hamburger Menu for smaller screens */}
      <NavbarMobile links={links} />
    </div>
  );
};

export default Navbar;
