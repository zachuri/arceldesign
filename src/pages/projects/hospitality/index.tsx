import React from "react";
import BoxGrid from "../../../components/box-grid";

import hospitality from "../../../data/hospitatlity.json";
import Box from "../../../components/box";

const Hospitality = () => {
  return (
    <>
      <BoxGrid title="hospitality">
        {hospitality.map((item) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"hospitality"}
            />
          );
        })}
      </BoxGrid>
    </>
  );
};

export default Hospitality;
