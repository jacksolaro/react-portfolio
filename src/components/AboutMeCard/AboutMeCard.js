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
          <img src={headshot} alt="jack headshot" className="bio__portrait " />
        </Grid>
        <Grid item sm={12} md={8}>
          <div className="bio__details">
            <h2>Jack Solaro</h2>
            <h4>FULL STACK DEVELOPER</h4>
            <p>
              I am a Full Stack Developer with 2.5 years of technology program
              management in the staffing industry. I have education in Business
              Information Systems from the University of Washington and UX
              Foundations. I take pride in developing creative solutions to
              complex problems!
            </p>
            <p>
              Outside of work, I am an hobbyist photographer - I've even won a
              couple of awards for my photogaphy! I love to take an idea from a
              concept to reality!
            </p>
            <br />
            <div className="about__buttons__block">
              <a href="#portfolio" className="btn btn-dark mr-1">
                Portfolio
              </a>

              <a href="#contact" className="btn btn-dark ml-1">
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
