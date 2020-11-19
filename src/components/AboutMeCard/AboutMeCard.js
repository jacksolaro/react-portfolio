import React from "react";
import Grid from "@material-ui/core/Grid";
import "./AboutMeCard.css";
import headshot from "../../images/bio_pic.jpg";

function AboutMeCard() {
  return (
    <div className="bio__container">
      <Grid container spacing={0} justify="space-around" alignItems="center">
        <Grid item xs={12} align="center">
          <h2>
            <strong>ABOUT ME</strong>
          </h2>
          <hr />
        </Grid>
        <Grid item xs={12} md={4} align="center">
          <img
            src={headshot}
            alt="jack headshot"
            className="bio__portrait rounded"
          />
        </Grid>
        <Grid item sm={12} md={8}>
          <div className="bio__details">
            <h3>Professionally:</h3>
            <p>
              I am a Web Developer with UX and Project/Program Management
              experience. My undergrad is in Business Information Systems from
              the University of Washington. I take pride in developing creative
              solutions to complex problems!
            </p>
            <h3>Personally: </h3>
            <p>
              Outside of work, I am an avid photographer. My work varies from
              fashion and lifestyle to conceptual and surrealistic portraiture.
              I love to take an idea from a concept to reality!
            </p>
            <br />
            <div className="about__buttons__block">
              <a href="/portfolio" className="btn btn-dark mr-1">
                Portfolio
              </a>

              <a href="/contact" className="btn btn-dark ml-1">
                Contact Me
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMeCard;