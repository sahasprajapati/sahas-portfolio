import Contact from "@components/Contact";
import FavoriteProjects from "@components/FavoriteProjects";
import type { NextPage } from "next";

import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
const Home: NextPage = () => {
  return (
    <ContainerBlock>
      <Hero />
      {/* <FavoriteProjects />
      <Contact /> */}
    </ContainerBlock>
  );
};

export default Home;
