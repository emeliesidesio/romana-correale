import React from "react";
import { Link } from "react-router-dom";
import stargem from "assets/romanacorreale-stargem-01.png";
import "./index.scss";

export default class ProjectViewStargem extends React.Component {
  render() {
    return (
      <Link to="/loginStargem" className="projectCard">
        <div className="cardOverlay">
          <div className="cardTitle">Stargem</div>
        </div>
        <div
          className="cardImage"
          style={{
            backgroundImage: `url(${stargem})`
          }}
        />
      </Link>
    );
  }
}
