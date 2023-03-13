import React from "react";
import { motion } from "framer-motion";

// const Line = () => {
//   return (
//     <motion.div
//       style={{ width: "0%", height: "2px", backgroundColor: "black" }}
//       animate={{ width: "100%" }}
//       transition={{ duration: 2 }}
//     />
//   );
// };

const Line = () => {
  return (
    <motion.div
      animate={{ width: "0%" }}
      transition={{ duration: 2 }}
      initial="hidden"
      whileInView={{
        width: "100%",
        height: "2px",
        backgroundColor: "black",
      }}
      viewport={{ once: true }}
      className="mt-5 "
    />
  );
};

export default Line;

// import React from "react";
// import { motion } from "framer-motion";

// const Line = () => {
//   return (
//     <motion.div
//       animate={{ width: "0%", height: "2px" }}
//       transition={{ duration: 2 }}
//       initial="hidden"
//       whileInView={{
//         width: "100%",
//         height: "2px",
//         backgroundColor: "black",
//       }}
//       viewport={{ once: true }}
//       className="mt-5 "
//     />
//   );
// };

// export default Line;
