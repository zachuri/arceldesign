import React from "react";
import BoxGrid from "../../components/box-grid";

import dental from "../../data/dental/dental.json";
import { GridLayoutMax } from "../../components/layout";

const Dental = () => {
  return (
    <GridLayoutMax>
      <BoxGrid images={dental} />;
    </GridLayoutMax>
  );
};

export default Dental;
