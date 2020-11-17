import React from "react";
import "../App.css";
import AboutMeCard from "../components/AboutMeCard/AboutMeCard";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import StrengthSection from "../components/StrengthSection/StrengthSection";

function Home() {
  return (
    <div>
      <Jumbotron></Jumbotron>
      <AboutMeCard></AboutMeCard>
      <StrengthSection></StrengthSection>
    </div>
  );
}

export default Home;
