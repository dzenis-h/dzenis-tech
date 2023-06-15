import React, { useContext } from "react";

import Navbar from "../components/layout/Navbar";
import { LangContext } from "../assets/locales/LangContext";
import { obj } from "../assets/locales/words";

import webp_Portrait from "../assets/img/portrait.webp";
import jpg_Portrait from "../assets/backup/portrait.jpg";

import Toggle from "./darkMode/ToggleContainer";
import { useTheme } from "./darkMode/useTheme";
import { Wrapper } from "./darkMode/Wrapper";

import Icon from "../components/helper/IconComponent";

import HTML5 from "../assets/icons/html.png";
import CSS3 from "../assets/icons/css.png";
import _react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.png";
import _js from "../assets/icons/js2.png";
import mongo from "../assets/icons/mongo.png";
import bootstrap from "../assets/icons/bootstrap.png";
import graph from "../assets/icons/graphql.png";
import express from "../assets/icons/express.png";
import git from "../assets/icons/git.png";
import webpack from "../assets/icons/webpack.png";
import gulp from "../assets/icons/gulp.png";
import code from "../assets/icons/vs_code.png";
import lodash from "../assets/icons/lodash.png";
import babel1 from "../assets/icons/babel1.png";
import postman from "../assets/icons/postman.png";
import jest from "../assets/icons/jest.png";
import handlebars from "../assets/icons/handlebars.png";
import python from "../assets/icons/python.png";
import java3 from "../assets/icons/java3.png";
import firebase from "../assets/icons/firebase.png";
import socket from "../assets/icons/socket.jpg";
import node from "../assets/icons/node.png";

const About = () => {
  const themeState = useTheme();
  const darkMode = localStorage.getItem("dark");

  const { lang } = useContext(LangContext);
  const {
    intro,
    uvod,
    philosophy,
    rutine,
    aristotle_1,
    aristotle_2,
    quote_1,
    quote_2,
    howard,
    team,
    head,
    think,
    teamwork,
    fp,
    princip,
    tech,
    additional,
    info,
    add_1,
    add_2,
    add_3,

    HTML_1,
    CSS_1,
    JS_1,
    React_1,
    Redux_1,
    NodeJS_1,
    MongoDB_1,
    Bootstrap_1,
    GraphQL_1,
    Firebase_1,
    Socket_1,
    Git_1,
    Webpack_1,
    Gulp_1,
    Babel_1,
    Postman_1,
    Lodash_1,
    Test,
    BE,
    Deployment,
    skills,
    health_1,
    java_1,
    python_1,
    code_1,
    relax_1,
    audio_1,
    ai,
    family,
    snapshot,

    about_1,
    about_2,
  } = obj[lang];

  return (
    <>
      <Wrapper>
        <main
          id="about"
          className={darkMode === "true" ? "dark-theme" : "white-theme"}
        >
          <Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>
          <div style={{ disply: "flex", textAlign: "center" }}>
            <Navbar />
          </div>
          <h1 className="lg-heading textShadow">
            <span
              className={
                darkMode === "true" ? "white specialColor" : " heading-about"
              }
            >
              {about_1}
            </span>
            <i
              className={
                darkMode === "true"
                  ? "specialColor custom-text"
                  : "dark-heading gold-headings"
              }
            >
              {" "}
              {about_2}
            </i>{" "}
          </h1>
          <h2 className="sm-heading">{snapshot}</h2>
          <div className="about-info">
            <picture>
              {/* If the browser supports WebP format use that*/}
              <source srcSet={webp_Portrait} type="image/webp" />
              {/* If NOT use the regular JPG foramt insted*/}
              <source srcSet={jpg_Portrait} type="image/jpeg" />
              {/* If the browser doesn't support the '<picture' tag use regular '<img> instead  */}
              <img src={jpg_Portrait} alt="Dzenis H." className="bio-image" />
            </picture>

            <div className="bio">
              <h3
                className={
                  darkMode === "true"
                    ? "text-secondary textShadow"
                    : "about-headline custom-text"
                }
              >
                {uvod}
              </h3>
              <small className={darkMode === "true" ? "about-parts" : "black"}>
                {intro}
              </small>
              <hr />
              <p
                className={
                  darkMode === "true"
                    ? "text-secondary textShadow"
                    : "about-headline custom-text"
                }
              >
                {philosophy}
              </p>
              <small>
                <strong className={darkMode === "true" ? "white" : "black"}>
                  {rutine}
                </strong>
                <hr className="marginBottom" />
                {aristotle_1}
                <em
                  className={
                    darkMode === "true"
                      ? "text-secondary textShadow"
                      : "about-headline custom-text"
                  }
                >
                  Aristotle
                </em>{" "}
                {aristotle_2}
                <blockquote
                  className={
                    darkMode === "true"
                      ? "sunflower sunflower__reverse"
                      : "sunflower"
                  }
                >
                  {quote_1}
                </blockquote>
                <p className={darkMode === "true" ? "about-parts" : "black"}>
                  {team}
                </p>
                <hr />
                {howard}
                <em
                  className={
                    darkMode === "true"
                      ? "text-secondary textShadow"
                      : "about- custom-text"
                  }
                >
                  {" "}
                  Howard Hughes:
                </em>
                <blockquote
                  className={
                    darkMode === "true"
                      ? "sunflower sunflower__reverse"
                      : "sunflower"
                  }
                >
                  {quote_2}
                </blockquote>
                <p
                  className={
                    darkMode === "true"
                      ? "text-secondary textShadow"
                      : "about-headline"
                  }
                  style={{ fontSize: "1.25rem", marginTop: "1rem" }}
                >
                  {head}
                </p>
                <p className={darkMode === "true" ? "about-parts" : "black"}>
                  {teamwork}
                </p>
              </small>
              <p
                className={
                  darkMode === "true"
                    ? "text-secondary textShadow"
                    : "about-headline custom-text"
                }
                style={{ fontSize: "1.25rem" }}
              >
                {think}
              </p>
              <blockquote
                className={
                  darkMode === "true"
                    ? "sunflower sunflower__reverse"
                    : "sunflower"
                }
              >
                {fp}{" "}
                <span role="img" aria-label="dash">
                  {" "}
                  ➖
                </span>{" "}
                <em>Richard Feynman</em>
              </blockquote>
              <small className={darkMode === "true" ? "about-parts" : "black"}>
                {princip}
              </small>{" "}
            </div>

            {/* ********************************************************** 
                TECH-STACK PART */}

            <div
              className={
                darkMode === "true"
                  ? "tech-stack-light black job job-1 animate__animated animate__backInLeft animate__delay-2s"
                  : "tech-stack-dark job job-1 animate__animated animate__backInLeft animate__delay-2s"
              }
            >
              <h3 className="text-secondary specialFont bold">
                <span
                  className={
                    darkMode === "true" ? "sub-headings bold" : "bold white"
                  }
                >
                  {tech}
                </span>
              </h3>
              <h4 className={darkMode === "true" ? "black" : "white"}>
                {add_1}
              </h4>
              <ul className="about__list">
                <li>
                  <Icon name={HTML5} /> <b className="custom-text">HTML5 </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {HTML_1}{" "}
                  </i>
                </li>

                <li>
                  <Icon name={CSS3} /> <b className="custom-text">CSS 3 </b>{" "}
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {CSS_1}
                  </i>
                </li>

                <li>
                  <Icon name={_js} /> <b className="custom-text">JavaScript </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {JS_1}
                  </i>
                </li>

                <li>
                  <Icon name={_react} />{" "}
                  <b className="custom-text">React 17+ </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {React_1}{" "}
                  </i>
                </li>

                <li>
                  <Icon name={redux} /> <b className="custom-text">Redux </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {Redux_1}
                  </i>
                </li>

                <li>
                  <Icon name={node} /> <b className="custom-text">NodeJS </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {NodeJS_1}
                  </i>
                  <br />
                </li>

                <li>
                  <Icon name={mongo} /> <b className="custom-text">MongoDB </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {MongoDB_1}
                  </i>
                </li>

                <li>
                  <Icon name={bootstrap} />{" "}
                  <b className="custom-text">Bootstrap 4 </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {Bootstrap_1}
                  </i>
                </li>

                <li>
                  <Icon name={graph} /> <b className="custom-text">GraphQL </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {GraphQL_1}
                  </i>
                </li>

                <li>
                  <Icon name={firebase} />{" "}
                  <b className="custom-text">Firebase </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {Firebase_1}
                  </i>
                </li>

                <li>
                  <Icon name={socket} />{" "}
                  <b className="custom-text">Socket.IO </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {Socket_1}
                  </i>
                </li>

                <br />
              </ul>
            </div>

            {/* Additional tech */}
            <div
              className={
                darkMode === "true"
                  ? "tech-stack-light job job-2 animate__animated animate__backInUp animate__delay-2s"
                  : "tech-stack-dark job job-2 animate__animated animate__backInUp animate__delay-2s"
              }
            >
              <h3 className="text-secondary specialFont bold">
                <span
                  className={
                    darkMode === "true" ? "sub-headings bold" : "bold white"
                  }
                >
                  {additional}
                </span>
              </h3>
              <h4 className={darkMode === "true" ? "black" : "white"}>
                {add_2}
              </h4>
              <ul className="secondStack about__list">
                <li>
                  <br />
                  <img src={git} alt={git} width="24" height="24" />{" "}
                  <b className="custom-text">Git </b>
                  <i className={darkMode === "true" ? "black" : "white"}>
                    <br />
                    {Git_1}
                  </i>
                </li>

                <li>
                  <img src={webpack} alt={webpack} width="24" height="24" />{" "}
                  <b className="custom-text">Webpack </b> <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {Webpack_1}{" "}
                  </i>
                </li>

                <li>
                  <Icon name={gulp} />
                  <b className="custom-text">Gulp </b> <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {Gulp_1}
                  </i>
                </li>

                <li>
                  <Icon name={babel1} />
                  <b className="custom-text">Babel </b> <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {Babel_1}
                  </i>
                </li>

                <li>
                  <Icon name={postman} />
                  {"  "}
                  <b className="custom-text">Postman </b> <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {Postman_1}
                  </i>
                </li>

                <li style={{ marginTop: ".2rem" }}>
                  <Icon name={lodash} height="17px" width="20px" />
                  {"  "}
                  <b className="custom-text">Lodash </b> <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {Lodash_1}
                  </i>
                </li>

                <li>
                  <Icon name={jest} />
                  <b className="custom-text">Jest, Enzyme, Mocha </b> <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {Test}{" "}
                  </i>
                </li>

                <li>
                  <Icon name={handlebars} />{" "}
                  <b className="custom-text">EJS/ HBS </b> <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    {BE}
                  </i>
                </li>
              </ul>
              <hr />

              <h4 className="">
                <b className="custom-text">Deployment:</b>{" "}
                <span className={darkMode === "true" ? "black" : "white"}>
                  {Deployment}
                </span>
                <span className="custom-text ">
                  {" "}
                  Render, Heroku, Firebase, Netlify, App Engine, Vercel, GH
                  Pages, AWS, Google Cloud.
                </span>
              </h4>
              <h4 className={darkMode === "true" ? "black" : "white"}>
                {skills}
              </h4>
            </div>

            {/* Additional Info:
             */}
            <div
              className={
                darkMode === "true"
                  ? "tech-stack-light job job-3 animate__animated animate__backInUp animate__delay-2s"
                  : "tech-stack-dark job job-3 animate__animated animate__backInUp animate__delay-2s"
              }
            >
              {" "}
              <h3 className="text-secondary specialFont bold">
                <span
                  className={
                    darkMode === "true" ? "sub-headings bold" : "bold white"
                  }
                >
                  {info}
                </span>
              </h3>
              <ul className="thirdStack about__list">
                <li>
                  <span className={darkMode === "true" ? "black" : "white"}>
                    {" "}
                    {add_3}
                  </span>
                  <b className="custom-text">
                    {" "}
                    <br />
                    <span className="the_mern_stack custom-text sub-headings">
                      The <br /> M E R N stack
                    </span>
                    <span
                      style={{ fontSize: ".85rem" }}
                      className="diff-text"
                      aria-label="dash"
                      role="img"
                      id="mern"
                    ></span>{" "}
                    <br />
                    <p className="mern-list">
                      <span className="mr">MongoDB</span>
                      <Icon name={mongo} height="20" width="20" />
                      <span className="mr ml">ExpressJS</span>
                      <Icon name={express} height="18" width="18" />
                    </p>
                    <p className="mern-list">
                      <span className="mr ml">ReactJS</span>
                      <Icon name={_react} height="20" width="20" />
                      <span className="mr ml">NodeJS</span>
                      <Icon name={node} height="20" width="20" />
                    </p>
                  </b>
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <br />
                  {java_1}
                  <b className="costum-text"></b> <Icon name={java3} />
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  {python_1} <b className="custom-text"> Python.</b>{" "}
                  <Icon name={python} />
                </li>
                <li className={darkMode === "true" ? "white" : "black"}>
                  <br />
                  <span className="editor">
                    <Icon name={code} width="30" height="30" />

                    <span
                      style={{ marginLeft: ".33rem" }}
                      className={darkMode === "true" ? "black" : "white"}
                    >
                      {" "}
                      {code_1}{" "}
                    </span>
                    {"  "}
                  </span>
                </li>
              </ul>
              <hr />
              <br />
              <h4 className="marginTop custom-text b-white">{relax_1}</h4>
              <ul>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <i>{health_1}</i>
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <i>{audio_1}</i>
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <i>{ai}</i>
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <i>{family}</i>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default About;
