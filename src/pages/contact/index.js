import React from "react";
import Footer from "components/footer";
import Navigation from "components/navigation";
import profileHero from "assets/francesca-profile.jpg";
import profileSmall from "assets/francesca-profile-02.jpg";
import "./index.scss";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div
          className="heroImage profile"
          style={{ backgroundImage: `url(${profileHero})` }}
        />
        <div className="infoContainer">
          <div className="leftColumn">
            <div className="contactDetails">
              <div>
                <span className="headerSmall">Email:&nbsp;</span>
                francesca@gmail.com
              </div>
              <div>
                <span className="headerSmall">Instagram:&nbsp;</span>
                fra_rom_cor_firenze
              </div>
              <div>
                <span className="headerSmall">Vimeo:&nbsp;</span>
                romanacorreale
              </div>
            </div>
          </div>
          <div className="rightColumn">
            <div>
              Born in Italy, grew up in Venezuela and travelled world wide for
              the love of fashion. Perfectly trilingual and art collector, I am
              a resourceful problem solver and team player, who loves to share
              my prestigious international contacts for business and charity
              events.
              <br />
              <br />
              Contact me for collaborations or business opportunities.
            </div>
          </div>
        </div>
        <div className="mediaContainer">
          <div
            className="profileSmall"
            style={{ backgroundImage: `url(${profileSmall})` }}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
