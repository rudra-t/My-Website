import React from "react";
import blob from "./im/blob.svg";
function Home() {
  return (
    <>
      <header id="Home">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-6">
              <div className="home-text">
                <h1>Hare Krishna</h1>
                <h2>
                  I m Rudra<span> Tiwari</span>
                </h2>
                <p>
                  A jounier Front End Doveloper and full time Sales Executive in
                  LENOVO. I have experience with front-end development languages
                  such as HTML, CSS, and JavaScript.As a web developer with one
                  year of experience and a background in sales, helped me to
                  understand the needs of a coustmer.
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
