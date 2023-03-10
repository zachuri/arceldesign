import React from "react";
import BoxGrid from "../../components/box-grid";

import corporate from "../../data/corporate.json";

const Corporate = () => {
  return (
    <>
      <BoxGrid images={corporate} total={corporate.length} title="corporate" />
    </>
  );
};

export default Corporate;
