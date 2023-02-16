import Link from "next/link";
import React, { useState } from "react";
import HamburgerMenu from "./hamburger-menu";

const links = [
  { href: "/projects", name: "Projects" },
  { href: "/about", name: "About" },
  { href: "/contact", name: "Contact" },
  { href: "/news", name: "News" },
  { href: "/clients", name: "Clients" },
];

const Navbar = () => {
  // NOTE: could've put state in componenet
  // wanted to learn how to pass state into other componeents!

  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
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

      {/* Hamburger Menu */}
      <HamburgerMenu nav={nav} handleNav={handleNav} links={links} />
    </div>
  );
};

export default Navbar;
