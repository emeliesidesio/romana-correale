import React from "react";
import projects from "data/projects";
import Footer from "components/footer";
import Navigation from "components/navigation";
import classNames from "classnames";
import "./index.scss";

export default class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
  }

  componentDidMount() {
    const project = projects.find(p => p.id === this.props.match.params.id);
    this.setProject(project);
  }

  setProject = project => {
    this.setState({
      project
    });
  };

  render() {
    const { project } = this.state;
    let projectImage1 = classNames({
      projectImage: true,
      projectImageSmall: !this.state.project.video
    });

    return (
      <div>
        <Navigation />
        <div
          className="heroImage"
          style={{ backgroundImage: `url(${project.thumbnailImage})` }}
        />
        <div className="infoContainer">
          <div className="leftColumn">
            <div>
              <span className="headerSmall">Role:&nbsp;</span>
              {project.role}
            </div>
            <div>
              <span className="headerSmall">Year:&nbsp;</span>
              {project.year}
            </div>
          </div>
          <div className="rightColumn">
            <div className="title">{this.state.project.title}</div>
            <span>
              {project.description}
              {project.link && (
                <a target="_blank" rel="noopener noreferrer" className="projectLink"
                href={project.link}>View the collection</a>
              )}
            </span>
          </div>
        </div>
        <div className="mediaContainer" id="mediaContainer">
          {project.video && (
            <div className="videoWrapper" id="video">
              <video
                poster={project.videoPlaceholder}
                controls
                className="projectVideo"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          {project.projectImage1 && (
            <div
              className={projectImage1}
              style={{
                backgroundImage: `url(${project.projectImage1})`
              }}
            />
          )}
          {project.projectImage2 && (
            <div
              className="projectImage"
              style={{
                backgroundImage: `url(${project.projectImage2})`
              }}
            />
          )}
          {project.projectImage3 && (
            <div
              className="projectImage"
              style={{
                backgroundImage: `url(${project.projectImage3})`
              }}
            />
          )}
          {project.photographer && (
            <div className="photoByline">
              Photographer:&nbsp;{project.photographer}
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}
