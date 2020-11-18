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
      <div className="container portfolio__container">
        <div className="card mt-5 mb-5">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            {projectsArr.map((project) => (
              <Project key={project.id} projectObj={project}></Project>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
