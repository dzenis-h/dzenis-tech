import React from "react";
import { Wrapper } from "../darkMode/Wrapper";

const SideBar = ({ link, linkAlt, icon, text }) => {
  const darkMode = localStorage.getItem("dark");

  return (
    <Wrapper>
      <li className="xo">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={linkAlt}
          className={
            darkMode === "true"
              ? " contact-form-links-white sidebar-list"
              : "contact-container sidebar-list"
          }
        >
          <i className={icon}></i>
          {text}
        </a>
      </li>
    </Wrapper>
  );
};

export default SideBar;
