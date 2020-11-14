import React from "react";
import "./Project.css";
import "../../App.css";
import { Grid, Button } from "@material-ui/core/";

function Portfolio({ projectObj }) {
  return (
    <Grid item xs={12} sm={6} align="">
      <div className="card">
        <img className="card-img-top" src={projectObj.image} alt="Card cap" />
        <div className="">
          <h5>{projectObj.title}</h5>
          <p className="">{projectObj.description}</p>
          <p>
            <strong>Project Type: </strong>
            {projectObj.type}
          </p>
          <p>
            <strong>My Contribution: </strong>
            {projectObj.contribution}
          </p>
          <p>
            <strong>Technology Used: </strong>
            {projectObj.technologyUsed}
          </p>
          <Grid container spacing={0} justify="center" alignItems="center">
            <Grid item xs={6} align="center">
              <Button
                variant="contained"
                color="primary"
                href={projectObj.repo}
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
                href={projectObj.deployed}
                target="_blank"
                className="portfolioBtn"
              >
                Deployed
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
}

export default Portfolio;
