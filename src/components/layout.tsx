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
export const GridLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="max-lg:mt-[130px]">
      <div className="flex items-center justify-center lg:h-screen">
        {children}
      </div>
    </div>
  );
};

// When grid has more than 6 use this layout
export const GridLayoutMax: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="mt-[130px]">
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
};
