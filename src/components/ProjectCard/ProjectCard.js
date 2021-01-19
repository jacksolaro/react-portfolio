import React from "react";
import "./ProjectCard.css";
import "../../App.css";
import { Grid, Button } from "@material-ui/core/";

function ProjectCard(props) {
  return (
    <div className="ProjectCard__Card">
      <img
        className="ProjectCard__Image"
        src={props.projectObj.image}
        alt="Card cap"
      />

      <div className="">
        <h5>{props.projectObj.title}</h5>
        <p className="">{props.projectObj.description}</p>
        <p>
          <strong>Project Type: </strong>
          {props.projectObj.type}
        </p>
        <p>
          <strong>My Contribution: </strong>
          {props.projectObj.contribution}
        </p>
        <p>
          <strong>Technology Used: </strong>
          {props.projectObj.technologyUsed}
        </p>
        <Grid container spacing={0} justify="center" alignItems="center">
          <Grid item xs={6} align="center">
            <Button
              variant="contained"
              color="primary"
              href={props.projectObj.repo}
              target="_blank"
              className="portfolioBtn"
            >
              Github Repo
            </Button>
          </Grid>
          <Grid item xs={6} align="center">
            <Button
              variant="contained"
              color="secondary"
              href={props.projectObj.deployed}
              target="_blank"
              className="portfolioBtn"
            >
              Deployed
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ProjectCard;
