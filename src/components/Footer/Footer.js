import React from "react";
import "./Footer.css";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import DescriptionIcon from "@material-ui/icons/Description";

function Footer() {
  return (
    // <!-- Footer -->
    <footer className="">
      <div className="footer-accent"></div>
      {/* <div className="Footer__Contents"> */}
      <h2 className="Footer__Logo">
        <strong>JACK SOLARO</strong>
      </h2>

      <div>
        <i className="Footer__Icon fab fa-github fa-2x"></i>
        <i className="Footer__Icon fab fa-linkedin fa-2x"></i>
        <i class="Footer__Icon fas fa-file-pdf fa-2x"></i>
        <i class="Footer__Icon fas fa-phone-square fa-2x"></i>
        <i class="Footer__Icon fas fa-envelope-square fa-2x"></i>
      </div>

      <div className="Footer__Copyright">Copyright&copy; 2020 Jack Solaro</div>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
