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
