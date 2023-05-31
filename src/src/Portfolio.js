import React from "react";
import s1 from "./im/s1.jpg";
import s2 from "./im/s2.jpg";
import s3 from "./im/s3.jpg";
function Team() {
  return (
    <>
      <section className="my-5" id="Portfolio">
        <div className="container">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="row">
              <h1>My Work</h1>
              <div className="col-md-6 col-lg-4 mb-5 mb-md-0 gx-5">
                <div className="card-body">
                  <h5 className="card-title">Latest Project</h5>
                  <p className="card-text">Some projects which i have done.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-md-0 gx-5">
                <div className="card">
                  <img src={s2} className="card-img" alt="#" />
                  <div className="card-body">
                    <h5 className="card-title">Sweta</h5>
                    <p className="card-text">.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-md-0 gx-5">
                <div className="card">
                  <img src={s3} className="card-img" alt="#" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5 mb-md-0 gx-5">
                <div className="card">
                  <img src={s3} className="card-img" alt="#" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Team;
