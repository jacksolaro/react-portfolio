import React from "react";
import "../App.css";
import AboutMeCard from "../components/AboutMeCard/AboutMeCard";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";
import StrengthSection from "../components/StrengthSection/StrengthSection";
import home_jumbo from "../images/home_jumbo.jpg";

function Home() {
  return (
    <div>
      <Jumbotron
        key="0"
        image={home_jumbo}
        headline="Hi - I'm  JACK"
        subtitle="It's nice to meet you!"
      ></Jumbotron>
      <AboutMeCard></AboutMeCard>
      <PortfolioSection></PortfolioSection>
      <StrengthSection></StrengthSection>
    </div>
  );
}

export default Home;
