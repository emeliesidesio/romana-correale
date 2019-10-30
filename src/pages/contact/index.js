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
          <div className="leftColumn contact">
            <div className="contactDetails">
              <div>
                <span className="headerSmall">Email:&nbsp;</span>
                francescaromanacorreale2@gmail.com
              </div>
              <div>
                <span className="headerSmall">LinkedIn:&nbsp;</span>
                Francesca Romana Correale
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
            <div
              className="profileSmall"
              style={{ backgroundImage: `url(${profileSmall})` }}
            />
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
              <div className="headerSmall">Industries</div>
              <div>Fashion: Leather accessories</div>
              <div>Production: Music and film</div>
              <div>Art: Exhibitions and collaborations</div>
              <div>Architecture: Interior design</div>
              <div>Jewellery: International business development</div>
              <div>Charity: Art and jewellery auctions</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
