import React from "react";
import Contact from "../components/Contact/Contact";
import "../App.css";
import contact_jumbo from "../images/contact_jumbo.jpg";
import Jumbotron from "../components/Jumbotron/Jumbotron";

function ContactPage() {
  return (
    <div>
      <Jumbotron
        key="2"
        image={contact_jumbo}
        headline="Contact Me"
        subtitle=""
      ></Jumbotron>
      <Contact></Contact>
    </div>
  );
}

export default ContactPage;
