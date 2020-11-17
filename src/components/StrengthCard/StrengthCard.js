import React from "react";
import "./StrengthCard.css";

function StrengthCard(props) {
  return (
    <div className="card">
      {/* <div className="strength__number__div">1</div> */}
      <div className="strength__icon">
        <i className={`fas fa-${props.icon} fa-7x`}></i>
      </div>
      <div className="strength__name">
        <p>{props.strengthName}</p>
      </div>
      <div className="strength__description">{props.description}</div>
    </div>
  );
}

export default StrengthCard;
