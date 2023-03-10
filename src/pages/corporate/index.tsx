import React from "react";
import BoxGrid from "../../components/box-grid";

import corporate from "../../data/corporate.json";
import { GridLayoutMax } from "../../components/layout";

const Corporate = () => {
  return (
    <>
      <GridLayoutMax>
        <BoxGrid images={corporate} />
      </GridLayoutMax>
    </>
  );
};

export default Corporate;
