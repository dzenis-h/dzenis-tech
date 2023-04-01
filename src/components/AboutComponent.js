import React from "react";

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

  return (
    <>
      <Wrapper>
        <main
          id="about"
          className={darkMode === "true" ? "dark-theme" : "white-theme"}
        >
          <Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>
          <h1 className="lg-heading textShadow">
            <span
              className={
                darkMode === "true" ? "white specialColor" : " heading-about"
              }
            >
              About
            </span>
            <i
              className={
                darkMode === "true"
                  ? "specialColor custom-text"
                  : "dark-heading gold-headings"
              }
            >
              {" "}
              Me
            </i>{" "}
          </h1>
          <h2 className="sm-heading">
            A snapshot of what you can expect from me:
          </h2>
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
                Introduction:
              </h3>
              <small className={darkMode === "true" ? "about-parts" : "black"}>
                As a proactive individual, I strive to remain abreast of the
                most recent advancements in technology, web protocols, tools,
                and software development standards. I have a deep-seated passion
                for programming, and my ultimate objective is to attain mastery
                in the field. My approach is guided by a profound sense of
                self-discipline, relentless pursuit of knowledge, and unwavering
                patience - much like that of a devoted monk. I am a highly
                motivated individual, who consistently strives to exceed
                expectations.
              </small>
              <hr />
              <p
                className={
                  darkMode === "true"
                    ? "text-secondary textShadow"
                    : "about-headline custom-text"
                }
              >
                My philosophy is simple:
              </p>
              <small>
                <strong className={darkMode === "true" ? "white" : "black"}>
                  The level of your success can be found in your daily routine.
                </strong>
                <hr className="marginBottom" />
                Just like{" "}
                <em
                  className={
                    darkMode === "true"
                      ? "text-secondary textShadow"
                      : "about-headline custom-text"
                  }
                >
                  Aristotle
                </em>{" "}
                once said:
                <blockquote
                  className={
                    darkMode === "true"
                      ? "sunflower sunflower__reverse"
                      : "sunflower"
                  }
                >
                  We are what we repeatedly do. Excellence, then, is not an act,
                  but a habit.
                </blockquote>
                <p className={darkMode === "true" ? "about-parts" : "black"}>
                  As a team player, I am not solely focused on my own
                  self-development but rather on rising together with my
                  colleagues. My personal motto is "Let's win together!", and I
                  strongly believe that success is achieved through collective
                  effort. In the face of obstacles, I am always willing to adapt
                  and try a different approach, develop new habits, or explore
                  creative solutions that go beyond our usual purview. I am
                  passionate about fostering positive environments where
                  collaboration and knowledge-sharing are encouraged, and I am
                  dedicated to supporting the growth and success of my team. By
                  living and breathing positivity, I believe we can all achieve
                  our goals and exceed our own expectations.
                </p>
                <hr />
                In the words of the great
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
                  Don't tell me I can't do it; Don't tell me it can't be done.
                </blockquote>
                <p
                  className={
                    darkMode === "true"
                      ? "text-secondary textShadow"
                      : "about-headline"
                  }
                  style={{ fontSize: "1.25rem", marginTop: "1rem" }}
                >
                  My personality may slightly differ:
                </p>
                <p className={darkMode === "true" ? "about-parts" : "black"}>
                  As an independent thinker, I take full responsibility for my
                  work, whether alone or as part of a team. I am highly
                  solution-oriented, and when faced with a problem or a
                  seemingly impossible challenge, I go into overdrive to find a
                  workable solution. While individuality can be valuable, I
                  believe that the best results are achieved through teamwork,
                  with a focus on efficiency, creativity, and collaboration. I
                  prioritize maintaining composure and a calm mindset, as I
                  believe this leads to greater clarity and better
                  decision-making. I am fueled by curiosity and a desire to
                  explore new ideas, and I am always striving to work in agile,
                  efficient ways that enable true innovation. While I can work
                  independently, I am a true believer in the power of teamwork,
                  as I know that "Teamwork makes the dream work."
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
                My thinking process:
              </p>
              <blockquote
                className={
                  darkMode === "true"
                    ? "sunflower sunflower__reverse"
                    : "sunflower"
                }
              >
                “The first principle is that you must not fool yourself and you
                are the easiest person to fool.”{" "}
                <span role="img" aria-label="dash">
                  {" "}
                  ➖
                </span>{" "}
                <em>Richard Feynman</em>
              </blockquote>
              <small className={darkMode === "true" ? "about-parts" : "black"}>
                My thinking process is based on a problem-solving technique
                called “reasoning from first principles” or just first
                principles. It requires you to break down a complex problem into
                its most basic, foundational elements. The idea is to ground
                yourself in the foundational truths and build up from there. To
                follow this principle is like becoming an endlessly curious
                child again! Question anything and everything. Aristotle defined
                a first principle as, “the first basis from which a thing is
                known.” In short, just ask why regarding everything, every time.
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
                  Tech stack:
                </span>
              </h3>
              <h4 className={darkMode === "true" ? "black" : "white"}>
                Technologies that I'm familiar with, practice and use daily:
              </h4>
              <ul className="about__list">
                <li>
                  <Icon name={HTML5} /> <b className="custom-text">HTML5 </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [w/ the newest standards & approaches]{" "}
                  </i>
                </li>

                <li>
                  <Icon name={CSS3} /> <b className="custom-text">CSS 3 </b>{" "}
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [Grid, Flexbox, Animations, Sass]
                  </i>
                </li>

                <li>
                  <Icon name={_js} /> <b className="custom-text">JavaScript </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [proficient with vanilla <b>ES6</b> and above]
                  </i>
                </li>

                <li>
                  <Icon name={_react} />{" "}
                  <b className="custom-text">React 17+ </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [familiar with its entire ecosystem]
                  </i>
                </li>

                <li>
                  <Icon name={redux} /> <b className="custom-text">Redux </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [my essential tool for state management]
                  </i>
                </li>

                <li>
                  <Icon name={node} /> <b className="custom-text">NodeJS </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [mostly with <b>Express</b> & <b>SailsJS </b>too]
                  </i>
                  <br />
                </li>

                <li>
                  <Icon name={mongo} /> <b className="custom-text">MongoDB </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [natively or/ and with <b>Mongoose</b>]
                  </i>
                </li>

                <li>
                  <Icon name={bootstrap} />{" "}
                  <b className="custom-text">Bootstrap 4 </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [great with <b>Materialize CSS</b> too]
                  </i>
                </li>

                <li>
                  <Icon name={graph} /> <b className="custom-text">GraphQL </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [as an alternative to RESTful APIs]
                  </i>
                </li>

                <li>
                  <Icon name={firebase} />{" "}
                  <b className="custom-text">Firebase </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [Firestore, Hosting, Realtime DB, etc.]
                  </i>
                </li>

                <li>
                  <Icon name={socket} />{" "}
                  <b className="custom-text">Socket.IO </b>
                  <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [familiar with WebSockets protocol]
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
                  Additional utilities:
                </span>
              </h3>
              <h4 className={darkMode === "true" ? "black" : "white"}>
                Some of additional tools and libraries that I use regularly:
              </h4>
              <ul className="secondStack about__list">
                <li>
                  <br />
                  <img src={git} alt={git} width="24" height="24" />{" "}
                  <b className="custom-text">Git </b>
                  <i className={darkMode === "true" ? "black" : "white"}>
                    <br />
                    [as my version control system]
                  </i>
                </li>

                <li>
                  <img src={webpack} alt={webpack} width="24" height="24" />{" "}
                  <b className="custom-text">Webpack </b> <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [for module bundling]
                  </i>
                </li>

                <li>
                  <Icon name={gulp} />
                  <b className="custom-text">Gulp </b> <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [when a task runner is required]
                  </i>
                </li>

                <li>
                  <Icon name={babel1} />
                  <b className="custom-text">Babel </b> <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [for backward compatibility of ES6+]
                  </i>
                </li>

                <li>
                  <Icon name={postman} />
                  {"  "}
                  <b className="custom-text">Postman </b> <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [API development testing tool]
                  </i>
                </li>

                <li style={{ marginTop: ".2rem" }}>
                  <Icon name={lodash} height="17px" width="20px" />
                  {"  "}
                  <b className="custom-text">Lodash </b> <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [often required as my helper library]
                  </i>
                </li>

                <li>
                  <Icon name={jest} />
                  <b className="custom-text">Jest, Enzyme, Mocha </b> <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [as my testing utilities]
                  </i>
                </li>

                <li>
                  <Icon name={handlebars} />{" "}
                  <b className="custom-text">EJS/ HBS </b> <br />
                  <i className={darkMode === "true" ? "black" : "white"}>
                    [when all focus is on the backend]
                  </i>
                </li>
              </ul>
              <hr />

              <h4 className="">
                <b className="custom-text">Deployment:</b>{" "}
                <span className={darkMode === "true" ? "black" : "white"}>
                  I use various platforms depending on the type and the size of
                  the project:
                </span>
                <span className="custom-text ">
                  {" "}
                  Heroku, Firebase, Netlify, App Engine, AWS, Google Cloud.
                </span>
              </h4>
              <h4 className={darkMode === "true" ? "black" : "white"}>
                As the skills and experience of a developer grow, so does the
                list of tools used. It comes to a point where it is hard to list
                everything, but to me, the ones listed above are the most
                relevant.
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
                  Additional Info:
                </span>
              </h3>
              <ul className="thirdStack about__list">
                <li>
                  <span className={darkMode === "true" ? "black" : "white"}>
                    {" "}
                    The technology stack that I'm currently most focused on and
                    exclusively work with is:
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
                  <br />A programming language that I'm familiar with, but
                  haven't used for a very long time:
                  <b className="costum-text"> Java.</b> <Icon name={java3} />
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  A programming language that I plan to learn and would like to
                  work with in the future:{" "}
                  <b className="custom-text"> Python.</b> <Icon name={python} />
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
                      My favourite code editor is VS Code.{" "}
                    </span>
                    {"  "}
                  </span>
                </li>
              </ul>
              <hr />
              <br />
              <h4 className="marginTop custom-text b-white">
                When I'm not coding, learning new programming skills, or
                advancing the existing ones, I'm doing one of the following:
              </h4>
              <ul>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <i>Practicing meditation & a healthy lifestyle.</i>
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <i>Extensively listening to audiobooks.</i>
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <i>Reading articles about A.I.</i>
                </li>
                <li className={darkMode === "true" ? "black" : "white"}>
                  <i>Spending quality family time.</i>
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
