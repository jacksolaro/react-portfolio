import React from "react";
import "./Project.css";
import "../../App.css";
import { Grid, Button } from "@material-ui/core/";

function Portfolio(props) {
  return (
    <div className="projectCard card">
      <h2 className="projectCard__Title">{props.projectObj.title}</h2>
      <Grid container direction={props.index % 2 == 0 ? "row" : "row-reverse"}>
        <Grid xs={12} sm={4}>
          <img
            className="card-img-top"
            src={props.projectObj.image}
            alt="Card cap"
          />
        </Grid>
        <Grid xs={12} sm={8}>
          <div className="projectCard__Details">
            <p className="">{props.projectObj.description}</p>
            <p>
              <strong>Project Type: </strong>
              {props.projectObj.type}
            </p>
            {/* <p>
              <strong>Project Index: </strong>
              {props.index}
            </p> */}
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
        </Grid>
      </Grid>
    </div>
  );
}

export default Portfolio;
