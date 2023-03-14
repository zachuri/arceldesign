import React from "react";

interface LineProps {
  className?: string;
}

const Line: React.FC<LineProps> = ({ className }) => {
  return <div className={`border-b-1 flex-grow border-t-2 ${className}`} />;
};

export default Line;
