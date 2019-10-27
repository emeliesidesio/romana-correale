import React from "react";
import "./index.scss";
import ProjectView from "components/projectView/projectView.js";
import ProjectViewStargem from "components/projectView/projectViewStargem.js";
import Footer from "components/footer";
import Navigation from "components/navigation";
import projects from "data/projects";
import heroImage from "assets/francesca-hero-image.png";

class Home extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Navigation />
        <div className="imageOverlay" />
        <div
          className="heroImageHome"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="content">
          <div className="biography">
            Art Curator, Creative Director, Fashion Consultant and Trend
            Forecaster. Perfectly trilingual. Born in Italy, grew up in
            Venezuela. Lived both in United States and in Sweden. Currently
            living in Florence. Travelled the world for the love of art, music
            and fashion.
          </div>
          <div className="projectContainer" id="projects">
            {projects.map(project => (
              <ProjectView
                key={project.id}
                url={project.id}
                projectImage1={project.projectImage1}
                projectImage2={project.projectImage2}
                projectImage3={project.projectImage3}
                thumbnailImage={project.thumbnailImage}
                videoPlaceholder={project.videoPlaceholder}
                client={project.client}
                title={project.title}
                role={project.role}
                date={project.year}
                text={project.description}
                video={project.video}
                photographer={project.photographer}
              />
            ))}
            <ProjectViewStargem />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
