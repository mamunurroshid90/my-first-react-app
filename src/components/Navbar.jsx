import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src="src/assets/logo.png" alt="logo.png" />
            </div>
            <div className="menu">
              <ul>
                <li>
                  <a className="active" href="#">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#">ABOUT US</a>
                </li>
                <li>
                  <a href="#">ACHIEVEMENTS</a>
                </li>
                <li>
                  <a href="#">DEPARTMENTS</a>
                </li>
                <li>
                  <a href="#">COURSE</a>
                </li>
                <li>
                  <a href="#">COMPLAINT</a>
                </li>
                <li>
                  <a href="#">PHONE DIRECTORY</a>
                </li>
              </ul>
            </div>
            <button className="btn">message now</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
