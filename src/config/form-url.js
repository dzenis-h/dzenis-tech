let formUrl = "";

process.env.NODE_ENV === "production"
  // ? (formUrl = "https://dzenis-h-contact.appspot.com/form-data")
  ? (formUrl = "https://node-contact-server.herokuapp.com/form-data")
  : (formUrl = "http://localhost:5050/form-data");

export default formUrl;
