import Link from "next/link";
import Image from "next/image";

function Box({ src, alt }: { src: string; alt: string }) {
  return (
    <Link href={"/" + alt}>
      <div key={src + alt} className="relative mb-5 p-20 text-lg md:p-40 ">
        <Image
          fill
          // allows object to fit as a cover instead of filled
          style={{ objectFit: "cover" }}
          src={src}
          alt={alt}
        />
      </div>
      <p className="mb-5 text-center uppercase text-white max-md:text-xs">
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
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => {
          return <Box src={image.src} alt={image.alt} />;
        })}
      </div>
    </div>
  );
};

export default BoxGrid;
