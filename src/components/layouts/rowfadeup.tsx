import { motion } from "framer-motion";
import Link from "next/link";

// Made with Chatgpt

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

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: -0.5,
      staggerChildren: 0.75,
    },
  },
};

const itemVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const ExampleAnimation = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
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

export default ExampleAnimation;
