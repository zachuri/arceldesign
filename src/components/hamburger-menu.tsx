import Link from "next/link";
import React, { useState } from "react";
import { CancelIcon, HamburgerIcon } from "./svg-icons";

interface Props {
  links: { href: string; name: string }[];
}

const HamburgerMenu: React.FC<Props> = ({ links }) => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    // Navbar for smaller screens
    <div className="flex flex-row items-center justify-center bg-[#282928] px-10 md:hidden">
      <div className="w-full pt-5 drop-shadow-lg">
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
        </div>
      </div>
      <button onClick={handleSidebar}>
        <HamburgerIcon />
      </button>
      <div
        className={
          sidebar
            ? "fixed left-0 top-0 h-screen w-full bg-black/70 duration-500 ease-in"
            : ""
        }
      ></div>

      <div
        className={
          sidebar
            ? "fixed right-0 top-0 h-screen w-[75%] bg-[#282928] duration-500 ease-in-out"
            : "fixed right-[-100%] top-0 h-screen bg-[#282928] duration-500 ease-in-out"
        }
      >
        <div className="flex flex-row justify-between">
          <div className="m-5 flex flex-col p-5  text-[#fff]">
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
            <div className="text-[#838383]">ArcelDesign, Inc.</div>
          </div>
          <div onClick={handleSidebar} className="m-5 p-5">
            <CancelIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
