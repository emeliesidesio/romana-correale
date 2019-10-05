import React from "react";
import Footer from "components/footer";
import Navigation from "components/navigation";
import TestimonialView from "components/testimonialView";
import testimonials from "data/testimonials";
import classNames from "classnames";
import "./index.scss";

export default class Testimonials extends React.Component {
  constructor() {
    super();
    this.state = {
      testimonials: 8,
      currentPage: 1,
      lettersPerPage: 1
    };
  }

  increment = event => {
    if (
      this.state.currentPage <
      this.state.testimonials / this.state.lettersPerPage
    )
      this.setState({
        currentPage: this.state.currentPage + 1
      });
  };

  decrement = event => {
    if (this.state.currentPage > 1)
      this.setState({
        currentPage: this.state.currentPage - 1
      });
  };

  render() {
    const indexOfLastLetter =
      this.state.currentPage * this.state.lettersPerPage;
    const indexOfFirstLetter = indexOfLastLetter - this.state.lettersPerPage;
    const currentLetter = testimonials.slice(
      indexOfFirstLetter,
      indexOfLastLetter
    );

    let buttonPrevious = classNames({
      paginationButton: true,
      inactiveLink: this.state.currentPage < 2
    });

    let buttonNext = classNames({
      paginationButton: true,
      inactiveLink: this.state.currentPage > 7
    });

    return (
      <div>
        <Navigation />
        <div>
          {currentLetter.map(testimonial => (
            <TestimonialView
              key={testimonial.id}
              date={testimonial.date}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              text={testimonial.text}
            />
          ))}
        </div>
        <div className="pagination">
          <div className={buttonPrevious} onClick={this.decrement}>
            Previous
          </div>
          <div>|</div>
          <div className={buttonNext} onClick={this.increment}>
            Next
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
