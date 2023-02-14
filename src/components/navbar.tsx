import Link from 'next/link';
import React from "react";

const links = [
  { href: "/projects", name: "Projects" },
  { href: "", name: "About Us" },
  { href: "", name: "Contact Us" },
  { href: "", name: "News" },
  { href: "", name: "Clients" },
];

const Navbar = () => {
  return (
        <div className="m-5 flex flex-row justify-between">
          <div className="rounded-lg bg-[#282928] p-2">
            <h1 className="text-4xl text-[#D8D7D4]">ARCELDESIGN, INC.</h1>
            <p className="text-xl text-[#D8D7D4]">INTERIOR DESIGN + BUILD</p>
          </div>

          <div className="flex flex-wrap items-center">
            {links.map((link) => (
              <div className="p-4">
                <Link href={link.href}>
                  <button>{link.name}</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
  )
};

export default Navbar;
