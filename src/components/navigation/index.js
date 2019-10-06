import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./index.scss";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div
          className={
            this.props.location.pathname === "/testimonials"
              ? "navDesktop black"
              : "navDesktop white"
          }
        >
          <Link to="/" className="navLeft">
            Francesca Romana Correale
          </Link>
          <div className="navRight">
            <a href="/#projects">Projects</a>
            <Link to="/contact" className="navLeft">
              Contact
            </Link>
            <a href="/testimonials">Testimonials</a>
          </div>
        </div>

        <input id="hamburger" type="checkbox" className="mobileCheckbox" />

        <label className="hamburger" htmlFor="hamburger">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </label>

        <div className="menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
