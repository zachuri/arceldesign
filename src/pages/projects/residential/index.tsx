import Box from "../../../components/box";
import BoxGrid from "../../../components/box-grid";
import residential from "../../../data/residential.json";

const Residential = () => {
  return (
    <>
      <BoxGrid title="residential">
        {residential.map((item) => {
          return (
            <Box
              src={item.src}
              alt={item.alt}
              address={item.address}
              type={"residential"}
            />
          );
        })}
      </BoxGrid>
    </>
  );
};

export default Residential;
