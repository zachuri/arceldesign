import BoxGrid from "../../components/box-grid";

import residential from "../../data/residential.json";

const Residential = () => {
  return (
    <BoxGrid
      images={residential}
      total={residential.length}
      title="residential"
    />
  );
};

export default Residential;
