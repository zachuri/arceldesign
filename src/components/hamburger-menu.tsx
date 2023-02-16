import Link from "next/link";
import React, { useState } from "react";
import { CancelIcon, HamburgerIcon } from "./svg-icons";
import HeadlessSlideOver from "./headless-slider";

interface Props {
  links: { href: string; name: string }[];
}

const HamburgerMenu: React.FC<Props> = ({ links }) => {
  const [open, setOpen] = useState<boolean>(false);

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
      <button onClick={() => setOpen(true)}>
        <HamburgerIcon />
      </button>

      <HeadlessSlideOver
        open={open}
        setOpen={setOpen}
        title={"ArcelDesign, Inc."}
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
          </div>
        </div>
      </HeadlessSlideOver>
    </div>
  );
};

export default HamburgerMenu;
