import React from "react";
import Project from "../components/Project";
import projectsArr from "../utils/projects.json";
import "../App.css";

function PortfolioPage() {
  return (
    //   TODO: Get shadow to work
    <div className="container card shadow mt-5 p-4">
      <div className="row">
        <div className="col-md-12">
          <h1 className="">MY PORTFOLIO</h1>
          <p className="">Here is a sample of my work!</p>
        </div>
      </div>
      <div className="row">
        {projectsArr.map((project) => (
          <Project key={project.id} projectObj={project}></Project>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
