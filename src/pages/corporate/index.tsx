import React from "react";
import BoxGrid from "../../components/box-grid";

import corporate from "../../data/corporate.json";
import { GridLayout } from "../../components/layout";

const Corporate = () => {
  return (
    <>
      <GridLayout total={corporate.length}>
        <BoxGrid images={corporate} />
      </GridLayout>
    </>
  );
};

export default Corporate;
