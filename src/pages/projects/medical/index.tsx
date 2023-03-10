import React from "react";
import BoxGrid from "../../../components/box-grid";

import medical from "../../../data/medical.json";

const Medical = () => {
  return <BoxGrid images={medical} title="medical" />;
};

export default Medical;
