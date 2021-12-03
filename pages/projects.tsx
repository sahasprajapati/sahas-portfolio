import { NextPage } from "next";
import ContainerBlock from "../components/ContainerBlock";
import Projects from "../components/Projects";

const projects: NextPage = () => {
  return (
    <ContainerBlock>
      <Projects />
    </ContainerBlock>
  );
};
export default projects;
