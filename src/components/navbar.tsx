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
    <div className="m-5 flex flex-row justify-between">
      <div className="rounded-lg bg-[#282928] p-2">
        <h1 className="text-4xl text-[#D8D7D4]">ARCELDESIGN, INC.</h1>
        <p className="text-xl text-[#fff]">INTERIOR DESIGN + BUILD</p>
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
  );
};

export default Navbar;
