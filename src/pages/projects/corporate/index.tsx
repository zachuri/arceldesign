import Box from "../../../components/box";
import BoxGrid from "../../../components/box-grid";

import corporate from "../../../data/corporate.json";

const Corporate = () => {
  return (
    <>
      <BoxGrid title="corporate">
        {corporate.map((item) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"corporate"}
            />
          );
        })}
      </BoxGrid>
    </>
  );
};

export default Corporate;
