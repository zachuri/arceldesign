import React from "react";
import { GridLayout } from "../../components/layout";
import BoxGrid from "../../components/box-grid";

import hospitality from "../../data/hospitatlity.json";

const Hospitality = () => {
  return (
    <>
      <GridLayout total={hospitality.length}>
        <BoxGrid images={hospitality} />
      </GridLayout>
    </>
  );
};

export default Hospitality;
