import React from "react";
import about from "./im/about.svg";
import PDF from "./im/RPT.pdf";
function About() {
  return (
    <section id="About">
      <div className="container-lg">
        <div className="row">
          <div className="about-text col-md-6">
            <h2>About Me</h2>
            <h1>
              Web doveloper from <br />
              <span>INDIA</span>
            </h1>
            <p>
              I have done my Bachelor's degree in the field of Commerce with
              experience of 1-2 years as a computer operator, sales executive,
              insurance agent, and office administrator having skills in Excel
              and Word with good comminucation.
            </p>
            <a className="btn" target="_blank" href={PDF}>
              Download CV
            </a>
          </div>
          <div className="col-md-6 about-image order-md-first">
            <img src={about} alt="#"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
