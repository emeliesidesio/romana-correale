import React from "react";
import instagram from "assets/social-instagram.png";
import email from "assets/social-email.png";
import vimeo from "assets/social-vimeo.png";
import linkedIn from "assets/social-linkedin.png";
import "./index.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="https://www.linkedin.com/in/francesca-romana-correale-28aa19194/">
            <img src={linkedIn} alt="social linkedIn" />
          </a>
          <a href="https://www.instagram.com/fra_rom_cor_firenze/">
            <img src={instagram} alt="social icon Instagram" />
          </a>
          <a href="mailto:francescaromanacorreale2@gmail.com">
            <img src={email} alt="social icon email" />
          </a>
          <a href="https://vimeo.com/romanacorreale">
            <img src={vimeo} alt="social icon Vimeo" />
          </a>
        </div>
        <div className="copyright">&#169;Francesca Romana Correale 2019</div>
      </div>
    );
  }
}
