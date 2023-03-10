import Box from "../../components/box";
import BoxGrid from "../../components/box-grid";

const Projects = () => {
  return (
    <div>
      <BoxGrid title={"projects"}>
        <Box
          src={"/assets/corporate/c1.jpg"}
          alt={"corporate"}
          address={""}
          type={"projects"}
        />
        <Box
          src={"/assets/dental/dental1.jpg"}
          alt={"dental"}
          address={""}
          type={"projects"}
        />
        <Box
          src={"/assets/hospitality/h1.jpg"}
          alt={"hospitality"}
          address={""}
          type={"projects"}
        />
        <Box
          src={"/assets/medical/m1.jpg"}
          alt={"medical"}
          address={""}
          type={"projects"}
        />
        <Box
          src={"/assets/residential/r1.jpg"}
          alt={"residential"}
          address={""}
          type={"projects"}
        />
      </BoxGrid>
    </div>
  );
};

export default Projects;
