import React from "react";
import Project from "../components/Project/Project";
import projectsArr from "../utils/projects.json";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import portfolio_jumbo from "../images/portfolio_jumbo.jpg";

function PortfolioPage() {
  return (
    <div>
      <Jumbotron
        key="1"
        image={portfolio_jumbo}
        headline="My Portfolio"
        subtitle="A sample of my projects"
      ></Jumbotron>
      {/* <div className=" portfolio__container"> */}
      {/* <div className="card mt-5 mb-5"> */}
      <Grid container direction="row" justify="center" alignItems="center">
        {projectsArr.map((project, index) => (
          <Grid item xs={12} sm={12} align="">
            <Project
              key={project.id}
              projectObj={project}
              index={index}
            ></Project>
          </Grid>
        ))}
      </Grid>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default PortfolioPage;
