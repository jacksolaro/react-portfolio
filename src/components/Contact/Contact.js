import React from "react";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import DescriptionIcon from "@material-ui/icons/Description";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="contact-container">
        {/* <div className="container"> */}
        <div className="contactCard card">
          <h1>CONTACT INFO</h1>
          <div>
            <p>
              <EmailIcon />
              <strong>Email: </strong>
              <a href="mailto:">jacksolaro@gmail.com</a>
            </p>
          </div>
          <div>
            <p>
              <PhoneIcon />
              <strong>Phone: </strong>
              <a href="mailto:">(310)318-4555</a>
            </p>
          </div>

          <p>
            <i className="fab fa-github fa-2x"></i>
            <strong>Github: </strong>
            <a
              href="https://github.com/jacksolaro"
              rel="noreferrer"
              target="_blank"
            >
              https://github.com/jacksolaro
            </a>
          </p>

          <p>
            <i className="fab fa-linkedin fa-2x"></i>
            <strong>LinkedIn: </strong>
            <a
              href="https://www.linkedin.com/in/jacksolaro/"
              rel="noreferrer"
              target="_blank"
            >
              https://www.linkedin.com/in/jacksolaro/
            </a>
          </p>

          <div>
            <p>
              <DescriptionIcon />
              <strong>Resume: </strong>
              <a target="_blank" href="src\images\Jack_Solaro_Resume.pdf">
                Jack Solaro Resume
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Contact;
