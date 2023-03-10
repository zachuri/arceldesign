import React from "react";
import BoxGrid from "../../../components/box-grid";

import medical from "../../../data/medical.json";
import Box from "../../../components/box";

const Medical = () => {
  return (
    <>
      <BoxGrid title="medical">
        {medical.map((item) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"medical"}
            />
          );
        })}
      </BoxGrid>
    </>
  );
};

export default Medical;
