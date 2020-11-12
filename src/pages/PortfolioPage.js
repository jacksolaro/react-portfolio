import React from "react";
import Project from "../components/Project";
import projectsArr from "../utils/projects.json";
import "../App.css";
import Grid from "@material-ui/core/Grid";

function PortfolioPage() {
  return (
    //   TODO: Get shadow to work
    <div className="container">
      <div className="card">
        <h1 className="">MY PORTFOLIO</h1>
        <p className="">Here is a sample of my work!</p>

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
  );
}

export default PortfolioPage;
