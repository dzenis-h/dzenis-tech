import React from "react";

const Icon = ({ name, height, width }) => {
  return <img src={name} alt={name} width={width} height={height} />;
};

Icon.defaultProps = {
  name: "tech stack",
  alt: "tech stack",
  ariaLabel: "tech stack",
  width: 24,
  height: 24,
};

export default Icon;
