import React from "react";
import "./Jumbotron.css";

function Jumbotron() {
  return (
    <div>
      <div className="jumbotron__main">
        <div className="jumbotron__content">
          <h1 className="jumbotron__title">
            <strong>
              Hi - I'm <span className=""> JACK </span>
            </strong>
          </h1>
          <p className="jumbotron__subtitle">It's nice to meet you!</p>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
