import Image from "next/image";
import Link from "next/link";

function Project({ src, alt }: { src: string; alt: string }) {
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

const Projects = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Project src={"/assets/corporate/c1.jpg"} alt={"corporate"} />
        <Project src={"/assets/dental/dental1.jpg"} alt={"dental"} />
        <Project src={"/assets/hospitality/h1.jpg"} alt={"hospitality"} />
        <Project src={"/assets/medical/m1.jpg"} alt={"medical"} />
        <Project src={"/assets/residential/r1.jpg"} alt={"residential"} />
      </div>
    </div>
  );
};

export default Projects;
