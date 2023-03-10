import React from "react";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="mt-[59px] md:mt-[83px]">{children}</div>;
};

export const AboutLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="max-md:mt-[59px]">{children}</div>;
};

// When gird layout has 6 or less
export const GridLayout: React.FC<{
  children: React.ReactNode;
  total: number;
  title: string;
}> = ({ children, total, title }) => {
  return (
    <>
      {total < 6 ? (
        <div className="max-lg:mt-[90px]">
          <div className="flex items-center justify-center lg:h-screen">
            <div className="flex flex-col items-center">
              <div className="flex flex-col max-sm:mx-7">
                <h1
                  style={{ letterSpacing: 5 }}
                  className="mb-5 text-2xl uppercase text-white md:mb-10 md:mt-10 md:text-4xl"
                >
                  {title}
                </h1>
                {children}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-[90px] md:mt-[130px]">
          <div className="flex items-center justify-center">
            <div className="flex flex-col max-sm:mx-7">
              <h1
                style={{ letterSpacing: 5 }}
                className="mb-5 text-2xl uppercase text-white md:mb-10 md:text-4xl"
              >
                {title}
              </h1>
              <div className="max-w-5xl">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
