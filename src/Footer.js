import React from "react";
function Footer() {
  return (
    <>
      <footer id="Contact">
        <h1>
          Visit <span>US</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
          laboriosam!
        </p>
        <div className="social-links">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
          <div className="credit">
            <p>Designed by Rudra tiwari</p>
          </div>
          <div className="credit">
            <p>Copyright Rudra tiwari. All rights reserved</p>
          </div>
        </div>
        <div className="container rounded py-5" id="contact">
          <div className="text-center bg-danger py-5">
            <h1 className="fs-1 mb-2 fw-bold text-light">
              Do you have any projects
            </h1>
            <a href="rtiwari1308@gmail.com" className="btn btn-dark mt-3">
              I m interested
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
