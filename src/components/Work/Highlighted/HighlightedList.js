import React from "react";
import Local_Setup from "../../../assets/documents/Local_Setup.pdf";

import { Wrapper } from "../../darkMode/Wrapper";

const HighlightedList = ({ openVideo }) => {
  const darkMode = localStorage.getItem("dark");

  return (
    <Wrapper>
      <ul className="highlightedList">
        <li>
          <b className="custom-text">
            Some of the technologies used in this app include:
          </b>
        </li>
        <hr />
        <li>
          <b>HTML5</b> & <b>CSS3</b> <i>[advance level]</i>
        </li>
        <li>
          <b>ReactJS</b> <i>[plus its entire ecosystem]</i>
        </li>
        <li>
          <b>Redux</b> <i>[for state management]</i>
        </li>
        <li>
          <b>NodeJS </b>
          <i>
            [w/ <b>SailsJS</b> in this app]
          </i>
        </li>
        <li>
          <b>MongoDB</b> <i>[for local storage]</i>
        </li>
        <li>
          <b>Bootstrap</b> <i>[plus pure CSS3]</i>
        </li>
        <li>
          <b>Google APIs</b> <i>[OAuth2, Drive & Spreadsheets]</i>
        </li>
        {/* <li>
          jQuery & Lodash <i>(as helper libraries)</i>
        </li> */}
        <li>... and so much more</li>
        <hr />
        <div className="highlightedList__icons">
          <li style={{ listStyleType: "none", paddingBottom: ".5rem" }}>
            <a
              href="#!"
              id="video"
              className={
                darkMode === "true"
                  ? "about-parts icons textShadow"
                  : "black-list icons textShadow"
              }
              onClick={openVideo}
              aria-label="Open the video demonstration"
            >
              <i className="fab fa-youtube fa-2x" />
              Watch Video Preview
            </a>
          </li>

          <li style={{ listStyleType: "none" }}>
            <a
              href={Local_Setup}
              className={
                darkMode === "true"
                  ? "about-parts icons textShadow"
                  : "black-list icons textShadow"
              }
              download="Local_Setup"
              aria-label="Download the instructions"
            >
              <i
                className={
                  darkMode
                    ? "links-black fas fa-download fa-2x"
                    : "links-white fas fa-download fa-2x"
                }
              />
              <span className={darkMode ? "links-black" : " links-white"}>
                Download Instructions
              </span>
            </a>
          </li>
        </div>
      </ul>
    </Wrapper>
  );
};

export default HighlightedList;
