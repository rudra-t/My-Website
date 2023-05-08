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
                <h2>Turning Vision Into Reality</h2>
                <p className="mt-2">
                  Everyone wants quality but not get so we are here with our
                  premium quality in least time at your doorstep.
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
