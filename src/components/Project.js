import React from "react";
import "./Project.css";

function Portfolio({ projectObj }) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={projectObj.image}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5>{projectObj.title}</h5>
        <p className="card-text">{projectObj.description}</p>
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
        <a href={projectObj.repo} target="_blank" className="btn btn-primary">
          Github Repo
        </a>
        <a href={projectObj.deployed} target="_blank" className="btn btn-dark">
          Deployed Application
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
