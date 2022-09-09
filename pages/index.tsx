import type { NextPage } from "next";
import Header from "../src/components/Header";
import MainSection from "../src/components/MainSection";
import Choices from "../src/components/Swipper";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Choices />
    </>
  );
};

export default Home;
