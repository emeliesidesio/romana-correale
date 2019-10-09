import React from "react";
import "./index.scss";

export default class testimonialView extends React.Component {
  render() {
    return (
      <div className="infoContainer testimonial">
        <div className="leftColumn testimonialLeft">
          <div>
            <span className="headerSmall">Date:&nbsp;</span>
            {this.props.date}
          </div>
          <div>
            <span className="headerSmall">Name:&nbsp;</span>
            {this.props.name}
          </div>
          {this.props.position && (
            <div>
              <span className="headerSmall">Position:&nbsp;</span>
              {this.props.position}
            </div>
          )}
          {this.props.company && (
            <div>
              <span className="headerSmall">Company:&nbsp;</span>
              {this.props.company}
            </div>
          )}
        </div>
        <div className="rightColumn testimonialRight">
          <div>{this.props.text}</div>
        </div>
      </div>
    );
  }
}
