import React from "react";
import Grid from "@material-ui/core/Grid";
import "../App.css";
import AboutMeCard from "../components/AboutMeCard/AboutMeCard";
import Jumbotron from "../components/Jumbotron/Jumbotron";

function Home() {
  return (
    <div>
      <Jumbotron></Jumbotron>

      <div className="container">
        <AboutMeCard></AboutMeCard>
        <div className="card">
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} align="center">
              <div>
                <h2>
                  <strong>MY STRENGTHS</strong>
                </h2>
                <hr />
                <p>
                  I am very passionate about the{" "}
                  <a href="https://www.gallup.com/cliftonstrengths/en/252137/home.aspx">
                    CliftonStrengths Assessment
                  </a>{" "}
                  provided by Gallup. CliftonStrengths is a strengths assessment
                  designed to help people uncover and leverage their strengths.
                  Below you can see my top 5 strengths.
                </p>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4} align="center">
              <div className="strength-card">
                <i className="fas fa-check-double fa-5x"></i>
                <h5 className="strengthTitle">1. ACHIEVER</h5>
                <p className="text-left">
                  Lots of stamina! Takes immense satisfaction in being{" "}
                  <strong>busy and productive</strong>.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} align="center">
              <div className="strength-card">
                <i className="fas fa-lightbulb fa-5x"></i>
                <h5 className="strengthTitle">2. IDEATION</h5>
                <p className="text-left">
                  Fascinated by ideas! Able to find connections between
                  seemingly disparate phenomena.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} align="center">
              <div className="strength-card">
                <i className="fas fa-chess-pawn fa-5x"></i>
                <h5 className="strengthTitle">3. STRATEGIC</h5>
                <p className="text-left">
                  Create alternative ways to proceed! Faced with any given
                  scenario, can quickly spot the relevant patterns and issues.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} align="center">
              <div className="strength-card">
                <i className="fas fa-users fa-5x"></i>
                <h5 className="strengthTitle">4. INDIVIDUALIZATION</h5>
                <p className="text-left">
                  Intrigued with the unique qualities of each person! Has a gift
                  for figuring out how different people can work together
                  productively.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} align="center">
              <div className="strength-card">
                <i className="fas fa-wrench fa-5x"></i>
                <h5 className="strengthTitle">5. RESTORATIVE</h5>
                <p className="text-left">
                  Adept at dealing with problems! Good at figuring out what is
                  wrong and resolving it.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Home;
