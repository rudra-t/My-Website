import React from "react";
function Footer() {
  return (
    <>
      <footer id="Contact">
        <div className="container qute">
          <div className="py-4">
            <h1 className="">Do you have any projects</h1>
            <a href="mailto:rtiwari@gmail.com" className="btn">
              I m interested
            </a>
          </div>
        </div>
        <h1>
          For <span>Contact</span>
        </h1>
        <div className="social-links">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <div className="credit">
            <p>Designed by Rudra tiwari</p>
          </div>
          <div className="credit">
            <p>Copyright Rudra tiwari. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
