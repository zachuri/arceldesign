import React from "react";
import { GridLayout } from "../../components/layout";
import BoxGrid from "../../components/box-grid";

import medical from "../../data/medical.json";

const Medical = () => {
  return (
    <GridLayout total={medical.length} title="Medical">
      <BoxGrid images={medical} />
    </GridLayout>
  );
};

export default Medical;
