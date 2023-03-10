import React from "react";
import BoxGrid from "../../components/box-grid";

import dental from "../../data/dental/dental.json";
import { GridLayout } from "../../components/layout";

const Dental = () => {
  return (
    <GridLayout total={dental.length} title="Dental">
      <BoxGrid images={dental} />;
    </GridLayout>
  );
};

export default Dental;
