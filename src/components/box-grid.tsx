import Link from "next/link";
import Image from "next/image";
import { MainLayout } from "./layout";

function Box({
  src,
  alt,
  address,
  type,
}: {
  src: string;
  alt: string;
  address: string;
  type: string;
}) {
  // Format the link address
  const name = alt.replace(/[,.\s]+/g, "-").toLowerCase();
  const location = address.split(",")[0]?.toLowerCase();
  let navigate = "";

  !location
    ? (navigate = name)
    : (navigate = name + "-" + location?.replace(/[,.\s]+/g, "-"));

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
        />
      </div>
      <p className="mt-5 aspect-auto text-center text-sm uppercase text-white md:text-base">
        {alt}
      </p>
    </Link>
  );
}

interface Props {
  images: { src: string; alt: string; address: string }[];
  title: string;
}

const BoxGrid: React.FC<Props> = ({ images, title }) => {
  return (
    <>
      <div className={"mt-[60px] grid place-items-center py-10 md:mt-[82.5px]"}>
        <div className="md:px-18 grid w-full grid-cols-2 gap-6 px-10 md:grid-cols-3 lg:px-44 xl:grid-cols-4 xl:px-64">
          <h1 className="col-span-2 text-4xl uppercase text-white max-md:text-3xl md:col-span-3 xl:col-span-4">
            {title}
          </h1>
          {images.map((image) => {
            return (
              <Box
                key={image.src + image.alt}
                src={image.src}
                alt={image.alt}
                address={image.address}
                type={title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BoxGrid;
