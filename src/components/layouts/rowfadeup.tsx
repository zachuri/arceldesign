// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useInView } from "react-intersection-observer";

// // Made with Chatgpt

// const links1 = [
//   { href: "/", name: "HOME" },
//   { href: "/about", name: "ABOUT" },
//   { href: "/contact", name: "CONTACT" },
// ];

// const links2 = [
//   { href: "/", name: "FACEBOOK" },
//   { href: "/about", name: "LINKEDIN" },
//   { href: "/contact", name: "INSTAGRAM" },
// ];

// const containerVariants = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: 1,
//     transition: {
//       delay: -0.5,
//       staggerChildren: 0.25,
//     },
//   },
// };

// const itemVariants = {
//   initial: {
//     opacity: 0,
//     y: 50,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// const ExampleAnimation = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.5, // Trigger when element is 50% visible
//     triggerOnce: true, // Only trigger once
//   });

//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="initial"
//       animate={inView ? "animate" : "initial"}
//       ref={ref}
//       className="container"
//     >
//       <div className="mt-10 flex flex-col space-y-10 md:flex-row md:space-y-0">
//         <motion.p variants={itemVariants} className="flex-auto text-stone-400">
//           ARCELDESIGN, INC.
//         </motion.p>

//         <motion.div variants={itemVariants} className="flex-auto">
//           {links2.map((link) => (
//             <div key={link.name}>
//               <Link href={link.href}>
//                 <button>{link.name}</button>
//               </Link>
//             </div>
//           ))}
//         </motion.div>

//         <motion.div variants={itemVariants} className="flex-auto">
//           {links1.map((link) => (
//             <div key={link.name}>
//               <Link href={link.href}>
//                 <button>{link.name}</button>
//               </Link>
//             </div>
//           ))}
//         </motion.div>

//         <motion.p variants={itemVariants} className="text-stone-400">
//           &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
//         </motion.p>
//       </div>
//     </motion.div>
//   );
// };

// export default ExampleAnimation;

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import useNextBlurhash from "use-next-blurhash";
import { BlurhashCanvas } from "react-blurhash";

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: -0.5,
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Box = ({
  src,
  alt,
  address,
  type,
  hash,
}: {
  src: string;
  alt: string;
  address: string;
  type: string;
  hash: string;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when element is 50% visible
    triggerOnce: true, // Only trigger once
  });

  // Format the link address
  const name = alt.replace(/[,.]+/g, "").replace(/[\s]+/g, "-").toLowerCase();
  const location = address.split(",")[0]?.toLowerCase();
  let navigate = "";

  !location
    ? (navigate = name)
    : (navigate =
        name + "-" + location?.replace(/[,.]+/g, "").replace(/[\s]+/g, "-"));

  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      ref={ref}
      className="container"
    >
      <div className="mt-10 flex flex-col space-y-10 md:flex-row md:space-y-0">
        <motion.p variants={itemVariants} className="flex-auto text-stone-400">
          ARCELDESIGN, INC.
        </motion.p>

        <motion.div variants={itemVariants} className="flex-auto">
          {links2.map((link) => (
            <div key={link.name}>
              <Link href={link.href}>
                <button>{link.name}</button>
              </Link>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex-auto">
          {links1.map((link) => (
            <div key={link.name}>
              <Link href={link.href}>
                <button>{link.name}</button>
              </Link>
            </div>
          ))}
        </motion.div>

        <motion.p variants={itemVariants} className="text-stone-400">
          &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Box;
