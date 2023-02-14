import Link from "next/link";
import React from "react";

const links = [
  { href: "/projects", name: "Projects" },
  { href: "/about", name: "About Us" },
  { href: "/contact", name: "Contact Us" },
  { href: "/news", name: "News" },
  { href: "/clients", name: "Clients" },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[100] mt-10 w-full">
      <div className="flex flex-row justify-between p-10">
        <div className=" bg-[#282928] p-5 uppercase">
          <h1 style={{ letterSpacing: 5 }} className="text-4xl text-[#D8D7D4]">
            ArcelDesign, Inc.
          </h1>
          <p style={{ letterSpacing: 5 }} className="text-xl text-[#fff]">
            Interior Design + Build
          </p>
        </div>

        <div className="flex flex-wrap items-center">
          {links.map((link) => (
            <div key={link.name} className="p-4">
              <Link href={link.href}>
                <button>{link.name}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
