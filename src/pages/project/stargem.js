import React from "react";
import Footer from "components/footer";
import Navigation from "components/navigation";
import stargem from "assets/romanacorreale-stargem-01.png";
import "./index.scss";

export default class Stargem extends React.Component {
  render() {

    return (
      <div>
        <Navigation />
        <div
          className="heroImage"
          style={{ backgroundImage: `url(${stargem})` }}
        />
        <div className="infoContainer">
          <div className="leftColumn">
            <div>
              <span className="headerSmall">Role:&nbsp;</span>
              Business developer and buyer
            </div>
            <div>
              <span className="headerSmall">Year:&nbsp;</span>
              2017
            </div>
          </div>
          <div className="rightColumn">
            <div className="title">Stargem</div>
            <div>International business development for Star Gem, Corsi Gioielli and buyer
            for Cecchi Gioielleria and Mirolli & Co. The mission contained of expanding
            the international client portfolio, to create new vibrant and trendy content
            for the shops and to follow up orders from international clients. To help
            shift the communication of the company towards a broader range of costumers
            and a worldwide public. In March 2018 Corsi Giolelli held an auction and a
            dinner gala in collaboration with the Lebanese Embassy in France, the Universitè
            Saint-Joseph and Nissan-Renault- Mitsubishi in which Corsi Gioielli gorgeous
            jewellery was auctioned together with other brands and a Nissan car. The mission
            of the event was to give scholarships to the students of Université Saint-Joseph,
            to create brand awareness and reach new international clients.</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
