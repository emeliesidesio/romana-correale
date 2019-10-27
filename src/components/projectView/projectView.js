import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default class ProjectView extends React.Component {
  render() {
    return (
      <Link to={`/projects/${this.props.url}`} className="projectCard">
        <div className="cardOverlay">
          <div className="cardTitle">{this.props.title}</div>
        </div>
        <div
          className="cardImage"
          style={{
            backgroundImage: `url(${this.props.thumbnailImage})`
          }}
        />
      </Link>
    );
  }
}
