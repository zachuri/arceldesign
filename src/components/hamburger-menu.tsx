import Link from "next/link";
import React, { useState } from "react";
import { CancelIcon, HamburgerIcon } from "./svg-icons";
import HeadlessSlideOver from "./headless-slider";
import { OverlayProvider, usePreventScroll } from "react-aria";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

interface Props {
  links: { href: string; name: string }[];
}

const HamburgerMenu: React.FC<Props> = ({ links }) => {
  const [open, setOpen] = useState<boolean>(false);

  usePreventScroll({ isDisabled: !open });

  return (
    // Navbar for smaller screens
    <OverlayProvider>
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
          <div className="flex flex-col items-center justify-between py-5">
            <div className="text-[#fff]">
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

            <div className="mt-5 flex flex-row space-x-8">
              <FaInstagram size={20} fill="#828282" />
              <FaFacebook size={20} fill="#828282" />
              <MdOutlineEmail size={20} fill="#828282" />
              <AiOutlinePhone size={20} fill="#828282" />
            </div>

            {/* Exit sidebar */}
            <div
              onClick={() => setOpen(false)}
              className="mt-20 rounded-xl border-2"
            >
              <CancelIcon />
            </div>
          </div>
        </HeadlessSlideOver>
      </div>
    </OverlayProvider>
  );
};

export default HamburgerMenu;
