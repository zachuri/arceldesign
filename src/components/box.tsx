import Link from "next/link";
import Image from "next/image";
import useNextBlurhash from "use-next-blurhash";

const Box = ({
  src,
  alt,
  address,
  type,
}: {
  src: string;
  alt: string;
  address: string;
  type: string;
}) => {
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
    <Link href={type + "/" + navigate}>
      <div className="relative aspect-square h-auto">
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
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
      </div>
      <p className="mt-5 aspect-auto text-center text-sm uppercase text-white md:text-base">
        {alt}
      </p>
    </Link>
  );
};
export default Box;
