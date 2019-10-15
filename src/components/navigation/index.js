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
            <Link to="/contact">Contact</Link>
            <Link to="/login">Testimonials</Link>
          </div>
        </div>

        <input id="hamburger" type="checkbox" className="mobileCheckbox" />

        <label className="hamburger" htmlFor="hamburger">
          <div
            className={
              this.props.location.pathname === "/testimonials"
                ? "bar bar1 barBlack"
                : "bar bar1"
            }
          ></div>
          <div
            className={
              this.props.location.pathname === "/testimonials"
                ? "bar bar2 barBlack"
                : "bar bar2"
            }
          ></div>
          <div
            className={
              this.props.location.pathname === "/testimonials"
                ? "bar bar3 barBlack"
                : "bar bar3"
            }
          ></div>
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
              <a href="/login">Testimonials</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
