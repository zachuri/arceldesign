import Box from "./box";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const BoxGrid: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <div className={"mt-[60px] grid place-items-center py-10 md:mt-[82.5px]"}>
        <div className="grid w-full grid-cols-2 gap-6 px-10 md:grid-cols-3 lg:px-48 xl:px-96">
          <h1 className="col-span-2 text-4xl uppercase text-white max-md:text-3xl md:col-span-3 xl:col-span-4">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </>
  );
};

export default BoxGrid;
