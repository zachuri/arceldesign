import React from "react";
import BoxGrid from "../../components/box-grid";

import dental from "../../data/dental/dental.json";

const Dental = () => {
  return <BoxGrid images={dental} total={dental.length} title="dental" />;
};

export default Dental;
