import Link from "next/link";
import Image from "next/image";
import { MainLayout } from "./layout";

function Box({ src, alt }: { src: string; alt: string }) {
  return (
    <Link href={"/" + alt}>
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
        />
      </div>
      <p className="mt-5 aspect-auto text-center text-xs uppercase text-white md:text-base">
        {alt}
      </p>
    </Link>
  );
}

interface Props {
  total: number;
  images: { src: string; alt: string }[];
  title: string;
}

const BoxGrid: React.FC<Props> = ({ images, total, title }) => {
  return (
    <>
      <div
        className={
          total < 6
            ? "grid min-h-screen place-items-center"
            : "mt-[60px] grid place-items-center py-10 md:mt-[82.5px]"
        }
      >
        <div className="md:px-18 grid w-full grid-cols-2 gap-6 px-10 md:grid-cols-3 xl:grid-cols-4 xl:px-[350px]">
          <h1 className="col-span-2 text-4xl uppercase text-white max-md:text-3xl md:col-span-3 xl:col-span-4">
            {title}
          </h1>
          {images.map((image) => {
            return (
              <Box
                key={image.src + image.alt}
                src={image.src}
                alt={image.alt}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BoxGrid;
