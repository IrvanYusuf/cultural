import React from "react";
import CarouselHome from "../components/CarouselHome";
import SectionInfo from "../components/SectionInfo";
import Category from "../components/Category";
import ExploreWisata from "../components/ExploreWisata";

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <SectionInfo />
      <Category />
      <ExploreWisata />
    </div>
  );
};

export default Home;
