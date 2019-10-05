import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./index.scss";

class Navigation extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.location.pathname === "/testimonials"
            ? "navContainer black"
            : "navContainer white"
        }
      >
        <div>
          <Link to="/" className="navLeft">
            Francesca Romana Correale
          </Link>
        </div>
        <div className="navRight">
          <a href="/#projects">Projects</a>
          <Link to="/contact" className="navLeft">
            Contact
          </Link>
          <a href="/testimonials">Testimonials</a>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
