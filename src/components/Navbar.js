import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <>
      {/* Navbar 요소 */}
      <nav>
        <ul>
          <li><a href="#Me">About</a></li>
          <li><a href="#infomation">Information</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      <div className="header">
        <span className="typing-text welcome-text">WELCOME</span><br />
        <span className="typing-text dayes-text">DAYE's</span><br />
        <span className="typing-text portfolio-text">PORTFOLIO</span>
      </div>
    </>
  );
}

export default Navbar;
