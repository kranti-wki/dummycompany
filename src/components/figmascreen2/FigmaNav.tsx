import React from "react";
import "./FigmaNav.css";
import { NavLink } from "react-router-dom";
import hospitablylogo from "../../assets/figmaimages/hospitablylogo.png";
import profileimg from "../../assets/figmaimages/profileimg.png";

const FigmaNav: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <div className="imagelogo">
            <img src={hospitablylogo} alt="" />
            <h1>HospiTably</h1>
          </div>

          <div className="navlist">
            <ul>
              <li>
                <NavLink to="/">Chat</NavLink>
              </li>
              <li>
                <NavLink to="/">Hospitably</NavLink>
              </li>
              <li>
                <NavLink to="/">Friends</NavLink>
              </li>
              <li>
                <NavLink to="/">Fourms</NavLink>
              </li>
            </ul>
          </div>

          <div className="userprofile-container">
            <div className="userprofile">
              <div className="userName">
                <h3>johns wilson</h3>
              </div>
              <div></div>
              <div className="userprofile-img">
                <img src={profileimg} alt="" />
              </div>
            </div>
            <button className="humburgericon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="humburgericon"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default FigmaNav;
