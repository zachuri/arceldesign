import Link from "next/link";
import React from "react";
function CancelButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

interface Props {
  nav: boolean;
  handleNav: () => void;
  links: { href: string; name: string }[];
}

const HamburgerMenu: React.FC<Props> = ({ nav, handleNav, links }) => {
  return (
    // Hamburger Menu
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
      <button onClick={handleNav}>
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

      {/* Hamburger Opened */}
      <div
        className={nav ? "fixed left-0 top-0 h-screen w-full bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 h-screen w-[75%] bg-[#282928] duration-500 ease-in sm:w-[60%] md:w-[45%]"
              : "fixed right-[-100%] top-0 h-screen bg-[#282928] duration-500 ease-in"
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
            <div onClick={handleNav} className="m-5 p-5">
              <CancelButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
