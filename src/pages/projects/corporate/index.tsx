import BoxGrid from "../../../components/box-grid";

import corporate from "../../../data/corporate.json";

const Corporate = () => {
  return (
    <>
      <BoxGrid images={corporate} title="corporate" />
    </>
  );
};

export default Corporate;
