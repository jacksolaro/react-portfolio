import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import projectsArr from "../../utils/projects.json";
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import "./PortfolioSection.css";

function PortfolioSection() {
  return (
    <div className="PortfolioSection__Container">
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="flex-start">
          <Grid item xs={12} align="center">
            <h2>
              <strong>RECENT WORK</strong>
            </h2>
            <hr />
          </Grid>
          {projectsArr.map((project, index) => (
            <Grid item xs={12} sm={4} align="">
              <ProjectCard
                key={project.id}
                projectObj={project}
                index={index}
              ></ProjectCard>
            </Grid>
          ))}
          <Button>See More</Button>
        </Grid>
      </Container>
    </div>
  );
}

export default PortfolioSection;
