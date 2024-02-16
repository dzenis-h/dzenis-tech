import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuBtn, setMenuBtn] = useState("menu-btn blob yellow menu-btn__add");
  const [menu, setMenu] = useState("menu");
  const [menuNav, setMenuNav] = useState("menu-nav");
  const [menuBranding, setMenuBranding] = useState("menu-branding");
  const [navItems, setNavItems] = useState("nav-item");

  const toggleMenu = () => {
    if (!showMenu) {
      localStorage.setItem("menu", "true");
      setShowMenu(true);
      setMenuBtn("menu-btn close blob");
      setMenu("menu show");
      setMenuNav("menu-nav show");
      setMenuBranding("menu-branding show");
      setNavItems("nav-item show wrapper animated bounceInLeft");
    } else {
      // Pulse effect & 'MENU' text is only going to be
      // present until the user finds/ clicks the MENU btn
      localStorage.setItem("menu", "false");
      setShowMenu(false);
      setMenuBtn("menu-btn blob yellow");
    }
  };

  const darkMode = localStorage.getItem("dark");

  return (
    <div>
      <header className="manu-plus">
        <div className={menuBtn} onClick={toggleMenu}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        {showMenu ? (
          <nav className={darkMode === "true" ? `${menu} menu__reverse` : menu}>
            <div
              className={
                darkMode === "true"
                  ? `${menuBranding} menu-branding__reverse`
                  : menuBranding
              }
            >
              <div className="portrait wrapper animated bounceInRight"></div>
            </div>

            <div
              className={
                darkMode === "true" ? `${menuNav} menu-nav__reverse` : menuNav
              }
              onClick={(e) => e.stopPropagation()}
            >
              <ul>
                <li className={navItems}>
                  <Link to="/" className="nav-link" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li className={navItems}>
                  <Link to="/about" className="nav-link" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li className={navItems}>
                  <Link to="/work" className="nav-link" onClick={toggleMenu}>
                    Work
                  </Link>
                </li>
                <li className={navItems}>
                  <Link to="/post" className="nav-link" onClick={toggleMenu}>
                    Blog
                  </Link>
                </li>
                <li className={navItems}>
                  <Link to="/contact" className="nav-link" onClick={toggleMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        ) : null}
      </header>
    </div>
  );
};

export default Menu;
