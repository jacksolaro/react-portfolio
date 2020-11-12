import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "../App.css";
import { Typography } from "@material-ui/core";

function Home() {
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        {/* <!-- HOME PAGE --> */}
        <div className="">
          <h1>
            <strong>
              Hi - I'm <span className="bg-warning text-black"> JACK </span>
            </strong>
          </h1>
          <p className="lead">It's nice to meet you!</p>
        </div>
      </Grid>

      <div className="container">
        <div className="card">
          <Grid container spacing={0} justify="center" alignItems="center">
            <Grid item xs={12} align="center">
              <h2>
                <strong>ABOUT ME</strong>
              </h2>
              <hr />
            </Grid>
            <Grid item xs={12} sm={4} align="center">
              <img src="/images/bio_pic.jpg" alt="" className="rounded" />
            </Grid>
            <Grid item xs={12} sm={8}>
              <h3>Professionally:</h3>
              <p>
                I am a Web Developer with UX and Project/Program Management
                experience. My undergrad is in Business Information Systems from
                the University of Washington. I take pride in developing
                creative solutions to complex problems!
              </p>
              <h3>Outside of Work: </h3>
              <p>
                Outside of work, I am an avid photographer. My work varies from
                fashion and lifestyle to conceptual and surrealistic
                portraiture. I love to take an idea from a concept to reality!
              </p>
              <h3>My Socials & Resume</h3>
              <a
                href="https://github.com/jacksolaro"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-github fa-3x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jacksolaro/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
              <p>
                Download my Resume{" "}
                <a target="_blank" href="Assets/files/jack-solaro-resume.pdf">
                  HERE
                </a>
              </p>
              <br />
              <a href="portfolio.html" className="btn btn-dark">
                Portfolio
              </a>
              <a href="contact.html" className="btn btn-dark">
                Contact Me
              </a>
            </Grid>
          </Grid>
        </div>

        <div className="card">
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
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
            <Grid item xs={12} sm={2} align="center">
              <div className="col-md border rounded pt-4 pr-3 pl-3 text-center">
                <i className="fas fa-check-double fa-5x"></i>
                <h5 className="strengthTitle">1. ACHIEVER</h5>
                <p className="text-left">
                  Lots of stamina! Takes immense satisfaction in being{" "}
                  <strong>busy and productive</strong>.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={2} align="center">
              <div className="col-md border rounded pt-4 pr-3 pl-3 text-center b">
                <i className="fas fa-lightbulb fa-5x"></i>
                <h5 className="strengthTitle">2. IDEATION</h5>
                <p className="text-left">
                  Fascinated by ideas! Able to find connections between
                  seemingly disparate phenomena.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={2} align="center">
              <div className="col-md border rounded pt-4 pr-3 pl-3 text-center ">
                <i className="fas fa-chess-pawn fa-5x"></i>
                <h5 className="strengthTitle">3. STRATEGIC</h5>
                <p className="text-left">
                  Create alternative ways to proceed! Faced with any given
                  scenario, can quickly spot the relevant patterns and issues.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={2} align="center">
              <div className="col-md border rounded pt-4 pr-3 pl-3 text-center b">
                <i className="fas fa-users fa-5x"></i>
                <h5 className="strengthTitle">4. INDIVIDUALIZATION</h5>
                <p className="text-left">
                  Intrigued with the unique qualities of each person! Has a gift
                  for figuring out how different people can work together
                  productively.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={2} align="center">
              <div className="col-md border rounded pt-4 pr-3 pl-3 text-center">
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
