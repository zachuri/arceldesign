import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavbarMobile from "./navbar-mobile";

const links = [
  { href: "/projects", name: "Projects" },
  { href: "/about", name: "About" },
  { href: "/clients", name: "Clients" },
  { href: "/news", name: "News" },
  { href: "/contact", name: "Contact" },
];

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

const Navbar = () => {
  const scrollDirection = useScrollDirection();

  return (
    // Navbar for Desktop Screens
    // <div className="fixed top-0 z-[100] w-full">
    //   <div className="hidden flex-row-reverse p-10 md:flex">
    //     <div className="bg-[#282928] drop-shadow-lg">
    //       <div className="-pb-5 p-5 uppercase">
    //         <h1 style={{ letterSpacing: 5 }} className="text-4xl text-[#fff]">
    //           ArcelDesign, Inc.
    //         </h1>
    //         <p
    //           style={{ letterSpacing: 5 }}
    //           className="mb-5 text-center text-xl text-[#838383]"
    //         >
    //           Interior Design + Build
    //         </p>
    //         <div className="flex items-center justify-center space-x-3 text-[#CFCCC9]">
    //           {links.map((link) => (
    //             <div
    //               key={link.name}
    //               className="text-md p-1 pb-1 hover:text-[#838383]"
    //             >
    //               <Link href={link.href}>
    //                 <button>{link.name}</button>
    //               </Link>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    <div
      className={`sticky z-10 ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } h-24 bg-[#282928] transition-all duration-500`}
    >
      <div className="mx-8 hidden flex-row justify-between p-5 uppercase md:flex">
        {/* Logo */}
        <div className="items-center justify-center">
          <Link href={"/"}>
            <h1 style={{ letterSpacing: 5 }} className="text-2xl text-[#fff]">
              ArcelDesign, Inc.
            </h1>
            <p style={{ letterSpacing: 5 }} className="text-xs text-[#838383]">
              Interior Design + Build
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-3 text-[#CFCCC9]">
          {links.map((link) => (
            <div
              key={link.name}
              className="text-md p-1 pb-1 hover:border-b hover:text-[#838383] hover:duration-200 hover:ease-in-out"
            >
              <Link href={link.href}>
                <button>{link.name}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Hamburger Menu for smaller screens */}
      <NavbarMobile links={links} />
    </div>
  );
};

export default Navbar;
