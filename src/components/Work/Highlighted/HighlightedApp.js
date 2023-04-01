import React, { Fragment } from "react";

const HighlightedApp = ({ mainLink, github }) => {
  return (
    <Fragment>
      <a
        href={mainLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-light"
      >
        <i className="fas fa-eye" /> Live preview
      </a>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-dark"
      >
        <i className="fab fa-github" /> Github repo
      </a>
    </Fragment>
  );
};

export default HighlightedApp;
