import React from "react";
import { GridLayout } from "../../components/layout";
import BoxGrid from "../../components/box-grid";

import residential from "../../data/residential.json";

const Residential = () => {
  return (
    <GridLayout total={residential.length} title="Medical">
      <BoxGrid images={residential} />
    </GridLayout>
  );
};

export default Residential;
