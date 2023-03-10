import Box from "./box";

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
