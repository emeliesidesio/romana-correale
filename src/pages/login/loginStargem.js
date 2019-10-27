import React from "react";
import Footer from "components/footer";
import Navigation from "components/navigation";
import loginHero from "assets/romanacorreale-login.jpg";
import "./index.scss";

export default class LoginStargem extends React.Component {
  theLogin = event => {
    event.preventDefault();
    const password = "catnap1919";

    if (document.getElementById("password").value === password) {
      window.location.href = "/stargem";
    } else {
      window.alert("Incorrect password, please try again.");
    }
  };

  render() {
    return (
      <div>
        <Navigation />
        <div
          className="heroImage profile"
          style={{ backgroundImage: `url(${loginHero})` }}
        />
        <div className="loginContainer">
          <form>
            <div className="loginText">
              To view this project you need to enter a password.
              To request a password, please email me at lillaessigen@icloud.com.
            </div>
            <input
              className="passwordInput"
              type="password"
              name="password"
              id="password"
            />
            <input
              className="submitButton"
              type="submit"
              onClick={this.theLogin}
              value="Enter"
            />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
