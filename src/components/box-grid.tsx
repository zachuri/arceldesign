import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  title?: string;
}

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

const BoxGrid: React.FC<Props> = ({ children, title }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when element is 50% visible
    triggerOnce: true, // Only trigger once
  });
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        ref={ref}
        className="container"
      >
        <div
          className={"mt-[60px] grid place-items-center py-10 md:mt-[82.5px]"}
        >
          <div className="grid w-full grid-cols-2 gap-6 px-10 md:grid-cols-3 lg:px-48 xl:px-96">
            <h1 className="col-span-2 text-4xl uppercase text-white max-md:text-3xl md:col-span-3">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BoxGrid;
