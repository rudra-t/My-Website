import React from "react";
import blob from "./im/blob.svg";
function About() {
  return (
    <section id="About">
      <div className="container my-5 my-md-0">
        <div className="row">
          <div className="col-md-6">
            <img src={blob} alt="#"></img>
          </div>
          <div className="about-text col-md-6">
            <h2>About Me</h2>
            <h1 className="my-3">Hello I m Rudra Tiwari</h1>
            <h2>Founder Of Raght info solution </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              totam consequuntur dolorem illo velit blanditiis,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
