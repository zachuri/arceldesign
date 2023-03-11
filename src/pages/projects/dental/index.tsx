import Box from "../../../components/box";
import BoxGrid from "../../../components/box-grid";

import dental from "../../../data/dental/dental.json";

const Dental = () => {
  return (
    <>
      <BoxGrid title="dental">
        {dental.map((item) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"dental"}
            />
          );
        })}
      </BoxGrid>
    </>
  );
};

export default Dental;
