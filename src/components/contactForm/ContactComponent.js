import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import formUrl from "../../config/form-url"; // The endpoint

import Navbar from "../../components/layout/Navbar";
import { LangContext } from "../../assets/locales/LangContext";
import { obj } from "../../assets/locales/words";

import SideLink from "./SideLink";
import InputField from "./InputField";

import Toggle from "../darkMode/ToggleContainer";
import { useTheme } from "../darkMode/useTheme";
import { Wrapper } from "../darkMode/Wrapper";
import "animate.css";

const Contact = () => {
  const initialState = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  };

  const [userInput, setUserInput] = useState(initialState);

  const themeState = useTheme();
  const darkMode = localStorage.getItem("dark");
  const { lang } = useContext(LangContext);
  const {
    ime_1,
    ime_2,
    podnaslov,
    info_3,
    linkedin,
    mail,
    telefon,
    skype,
    Obavezno,
    Company,
    Opcijonalo,
    EmailAddress,
    PhoneNumber,
    Message,
    SUBMIT,
    osoba
  } = obj[lang];

  useEffect(() => {
    document.title = "Contact me"; // making the document title dynamic
  }, []);

  const handleChange = (e) => {
    // onChange handler
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUserInput({ ...initialState }); // Reset the form to the 'initialState'
  };

  const sendData = (e) => {
    e.preventDefault();
    axios // Make the request to the backend
      .post(formUrl, { formData: userInput }) // e.g. "http://localhost:5050/form-data"
      .then((res) => success()) // If we got the response, show the 'success' toast
      .catch((err) => failed()) // Catch any error and show he 'error' toast
      .finally(resetForm()); // Reset the form, errors, responseData
  };

  // My custom toast
  const success = () => {
    toast.warning(() => (
      <div className="myToast">
        <p>
          {" "}
          Thank you for reaching out{" "}
          <span role="img" aria-label="text">
            👍
          </span>
        </p>
        <span style={{ float: "right" }} role="img" aria-label="author">
          <b>-</b> Dzenis
        </span>
      </div>
    ));
  };

  const failed = () => {
    toast.error(() => (
      <div className="myToast">
        <p>
          {" "}
          Network error, please try again later{" "}
          <span role="img" aria-label="text">
            😥
          </span>
        </p>
      </div>
    ));
  };

  const { name, company, phone, email, message } = userInput;

  return (
    <Wrapper>
      <main
        id="contact"
        className={darkMode === "true" ? "dark-theme" : "white-theme"}
      >
        <div style={{ disply: "flex", textAlign: "center" }}>
          <Navbar />
        </div>
        <Toggle toggleTheme={themeState} theme={themeState.dark}></Toggle>
        <h1 className="lg-heading textShadow">
          <span className={darkMode === "true" ? "white" : "heading-about"}>
            {ime_1}
          </span>
          <i
            className={
              darkMode === "true"
                ? "specialColor custom-text"
                : "dark-heading gold-headings"
            }
          >
            {" "}
            {ime_2}
          </i>{" "}
        </h1>

        <div className="contact-container">
          <div className="wrapper animate__animated bounceInLeft">
            <div className="company-info">
              <h2
                className={
                  darkMode === "true" ? "company-info-reverse lead" : "lead"
                }
                style={{fontSize: "1.22rem", marginBottom: '1.5rem'}}
              >
                {podnaslov}
              </h2>
              <small className="post-title" style={{ color: "firebrick" }}>
                {info_3}
              </small>
              <ul className="contact-list">
                <SideLink
                  link="https://www.linkedin.com/in/dzenis-h"
                  linkAlt="LinkedIn field"
                  icon="fab fa-linkedin-in"
                  text={linkedin}
                />
                <SideLink
                  link="mailto:dzenis.hankusic@gmail.com"
                  linkAlt="Email field"
                  icon="fas fa-at"
                  text={mail}
                />
                <SideLink
                  link="tel:00387644543006"
                  linkAlt="Phone number field"
                  icon="fas fa-mobile-alt"
                  text={telefon}
                />
                <SideLink
                  link="skype:dzenis.hankusic?call"
                  linkAlt="Skype field"
                  icon="fab fa-skype"
                  text={skype}
                />
              </ul>
            </div>

            {/* CONTACT FORM */}
            <div className="contact" style={{ backgroundColor: "#252525" }}>
              <h1 className="contact-heading">
                {ime_1} {ime_2}
              </h1>
              <p className="contact-plus">{info_3}</p>

              <form id="contact-form" onSubmit={sendData}>
                <InputField
                  label={osoba}
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  isRequired="required"
                  placeholder={Obavezno}
                  darkMode={darkMode}
                />
                <InputField
                  label={Company}
                  type="text"
                  name="company"
                  value={company}
                  onChange={handleChange}
                  isRequired=""
                  placeholder={Opcijonalo}
                  darkMode={darkMode}
                />
                <InputField
                  label={EmailAddress}
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  isRequired="required"
                  placeholder={Obavezno}
                  darkMode={darkMode}
                />
                <InputField
                  label={PhoneNumber}
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  isRequired=""
                  placeholder={Opcijonalo}
                  darkMode={darkMode}
                />
                <InputField
                  textarea
                  className="full"
                  label={Message}
                  rows="5"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  isRequired="required"
                  placeholder={Obavezno}
                  darkMode={darkMode}
                />
                <div className="full">
                  <button type="submit">{SUBMIT}</button>
                </div>
              </form>
            </div>
          </div>
          <ToastContainer autoClose={4000} closeOnClick />
        </div>
      </main>
    </Wrapper>
  );
};

export default Contact;
