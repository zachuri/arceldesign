import Link from "next/link";
import Image from "next/image";
// import useNextBlurhash from "use-next-blurhash";
import { BlurhashCanvas } from "react-blurhash";
import Fadeup from "./layouts/fadeup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  // Format the link address
  const name = alt.replace(/[,.]+/g, "").replace(/[\s]+/g, "-").toLowerCase();
  const location = address.split(",")[0]?.toLowerCase();
  let navigate = "";

  !location
    ? (navigate = name)
    : (navigate =
        name + "-" + location?.replace(/[,.]+/g, "").replace(/[\s]+/g, "-"));

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when element is 50% visible
    triggerOnce: true, // Only trigger once
  });

  return (
    <motion.div variants={itemVariants}>
      <Link href={type + "/" + navigate}>
        <Fadeup>
          <div className="relative aspect-square h-auto">
            <BlurhashCanvas
              hash={hash}
              width={32}
              height={32}
              punch={1}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
              }}
            />

            <Image
              fill
              // allows object to fit as a cover instead of filled
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{ objectFit: "cover" }}
              src={src}
              alt={alt}
              loading="eager"
              priority
              // placeholder="blur"
              // blurDataURL={blurDataUrl}
            />
          </div>

          <p className="mt-5 aspect-auto text-center text-sm uppercase text-white md:text-base">
            {alt}
          </p>
        </Fadeup>
      </Link>
    </motion.div>
  );
};

export default Box;
