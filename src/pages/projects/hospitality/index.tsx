import React from "react";
import BoxGrid from "../../../components/box-grid";

import hospitality from "../../../data/hospitatlity.json";

const Hospitality = () => {
  return (
    <>
      <BoxGrid images={hospitality} title="hospitality" />
    </>
  );
};

export default Hospitality;
