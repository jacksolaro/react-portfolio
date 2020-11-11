import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="col-md-6 col-xs-12 p-3">
      <div className="card">
        <img
          className="card-img-top"
          src="Assets/images/portfolio_personify_app.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5>Personify</h5>
          <p className="card-text">
            A full stack "Personality Quiz" builder and library with CRUD
            functionality and user authentication.
          </p>
          <p>
            <strong>Project Type: </strong>Group
          </p>
          <p>
            <strong>My Contribution: </strong>Front End Controller Logic,
            Handlebars, CSS (Bulma), UX, Logo
          </p>
          <p>
            <strong>Technology Used: </strong>HTML, CSS (Bulma), handlebars,
            Javascript, jQuery, Express, node.js, mySQL, sequelize, Heroku,
            bcrypt
          </p>
          <a
            href="https://github.com/jacksolaro/Personality-Quiz"
            target="_blank"
            className="btn btn-primary"
          >
            Github Repo
          </a>
          <a
            href="https://personify-personality-quiz.herokuapp.com/"
            target="_blank"
            className="btn btn-dark"
          >
            Deployed Application
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
