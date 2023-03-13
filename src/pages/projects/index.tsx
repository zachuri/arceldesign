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

        {/* Last two stay hidden when medium and up screen */}
        <div className="md:hidden">
          <Box
            src={"/assets/medical/m1.jpg"}
            alt={"medical"}
            address={""}
            type={"projects"}
          />
        </div>
        <div className="md:hidden">
          <Box
            src={"/assets/residential/r1.jpg"}
            alt={"residential"}
            address={""}
            type={"projects"}
          />
        </div>

        {/* For medium and above screen -> center last row */}
        {/* For smaller screens stay hidden */}
        <div className="mt-10 max-md:hidden md:col-span-3 md:grid md:justify-items-stretch">
          <div className="grid gap-6 md:grid-cols-6">
            <div className="md:col-start-2 md:col-end-4">
              <Box
                src={"/assets/medical/m1.jpg"}
                alt={"medical"}
                address={""}
                type={"projects"}
              />
            </div>
            <div className="md:col-start-4 md:col-end-6">
              <Box
                src={"/assets/residential/r1.jpg"}
                alt={"residential"}
                address={""}
                type={"projects"}
              />
            </div>
          </div>
        </div>
      </BoxGrid>
    </div>
  );
};

export default Projects;
