import React from "react";
import Title_Button from "./title_button";
import Body_Footer from "./bodyfooter";
import Bottom_Footer from "./bottomfooter";
import Line from "../../layouts/line_no_animation";

const links1 = [
  { href: "/", name: "HOME" },
  { href: "/about", name: "ABOUT" },
  { href: "/contact", name: "CONTACT" },
];

const links2 = [
  { href: "/", name: "FACEBOOK" },
  { href: "/about", name: "LINKEDIN" },
  { href: "/contact", name: "INSTAGRAM" },
];

const Contact = () => (
  <>
    <div className="h-full w-full bg-zinc-900 pb-14 text-white">
      <div className="mx-5 pt-20 md:mx-20 md:pt-10">
        <Title_Button />
        <Line className="mb-5 border-stone-800" />
        <Body_Footer />
        <Line className="mt-5 border-stone-800" />
        <Bottom_Footer />
      </div>
    </div>
  </>
);

export default Contact;
