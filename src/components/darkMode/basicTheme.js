// I little bit of JSS never hurts :)
const white = "#FFFFFF";
const orginal = "#444";
const black = "black";

const themeLight = {
  background: orginal,
  body: white,
  toggleBorder: black,
};

const themeDark = {
  background: black,
  body: orginal,
  toggleBorder: white,
};

const theme = (mode) => (mode === "dark" ? themeDark : themeLight);

export default theme;
