import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "pages/home";
import Contact from "pages/contact";
import ScrollTop from "components/scrollTop";
import Project from "pages/project";
import Testimonials from "pages/testimonials";
import Login from "pages/login";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ScrollTop>
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/projects/:id" component={Project} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/login" exact component={Login} />
              <Route path="/testimonials" exact component={Testimonials} />
            </div>
          </ScrollTop>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
