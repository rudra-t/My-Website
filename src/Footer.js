import React from "react";
function Footer() {
  return (
    <>
      <footer id="Contact">
        <h1>
          For <span>Contact</span>
        </h1>
        <div>
          <div className="credit">
            <p>Designed by Rudra tiwari</p>
          </div>
          <div className="credit">
            <p>Copyright Rudra tiwari. All rights reserved</p>
          </div>
        </div>
      </footer>
      <div className="container qute">
        <div className="py-4">
          <h1 className="">Do you have any projects</h1>
          <a href="mailto:rtiwari@gmail.com" className="qutebtn">
            I m interested
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
