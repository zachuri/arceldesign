import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="mt-[59px] md:mt-[83px]">{children}</div>;
};

export default MainLayout;
