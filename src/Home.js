import React from "react";
import blob from "./im/blob.svg";
function Home() {
  return (
    <>
      <header id="Home">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="home-text">
                <h1>
                  <span>Hare Krishna</span>
                </h1>
                <h2>Hello I m Rudra Tiwari</h2>
                <p>
                  A jounier Front End Doveloper and full time Sales executive in
                  LENOVO. I have experience with front-end development languages
                  such as HTML, CSS, and JavaScript.My experience as a
                  salesperson has given me an understanding of how businesses
                  operate and how to tailor solutions to meet their specific
                  needs
                </p>
                <a className="btn" href="#Services">
                  My services
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="home-img">
                <img src={blob}></img>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Home;
