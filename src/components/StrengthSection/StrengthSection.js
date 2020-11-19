import React from "react";
import Grid from "@material-ui/core/Grid";
import StrengthCard from "../StrengthCard/StrengthCard";
import "./StrengthSection.css";

function StrengthSection() {
  return (
    <div className="strength__section__wrapper">
      <div className="strength__section">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} align="center">
            <div>
              <h2>
                <strong>MY STRENGTHS</strong>
              </h2>
              <hr />
              <p className="strength__subtitle">
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
            <StrengthCard
              key={0}
              strengthName="Achiever"
              icon="check-double"
              description="Lots of stamina! Takes immense satisfaction in being busy and productive"
            ></StrengthCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} align="center">
            <StrengthCard
              key={0}
              strengthName="Ideation"
              icon="lightbulb"
              description="Fascinated by ideas! Able to find connections between
              seemingly disparate phenomena."
            ></StrengthCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} align="center">
            <StrengthCard
              key={0}
              strengthName="Strategic"
              icon="chess-pawn"
              description="Create alternative ways to proceed! Faced with any given
              scenario, can quickly spot the relevant patterns and issues."
            ></StrengthCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} align="center">
            <StrengthCard
              key={0}
              strengthName="Individualization"
              icon="users"
              description="Intrigued with the unique qualities of each person! Has a gift
              for figuring out how different people can work together
              productively."
            ></StrengthCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} align="center">
            <StrengthCard
              key={0}
              strengthName="Restorative"
              icon="wrench"
              description="Adept at dealing with problems! Good at figuring out what is
              wrong and resolving it."
            ></StrengthCard>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default StrengthSection;
