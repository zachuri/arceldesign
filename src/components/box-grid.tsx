import Link from "next/link";
import Image from "next/image";
import { MainLayout } from "./layout";

function Box({ src, alt }: { src: string; alt: string }) {
  return (
    <Link href={"/" + alt}>
      <div className="relative mb-5 p-[80px] text-lg sm:p-[120px] md:p-40">
        <Image
          fill
          // allows object to fit as a cover instead of filled
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{ objectFit: "cover" }}
          src={src}
          alt={alt}
        />
      </div>
      <p
        style={{ letterSpacing: 5 }}
        className="mb-5 uppercase text-white max-md:text-xs md:text-lg"
      >
        {alt}
      </p>
    </Link>
  );
}

interface Props {
  images: { src: string; alt: string }[];
}

const BoxGrid: React.FC<Props> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => {
        return (
          <Box key={image.src + image.alt} src={image.src} alt={image.alt} />
        );
      })}
    </div>
  );
};

export default BoxGrid;
