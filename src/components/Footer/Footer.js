import React from "react";
import "./Footer.css";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import DescriptionIcon from "@material-ui/icons/Description";

function Footer() {
  return (
    // <!-- Footer -->
    <footer id="footer" className="">
      <div className="footer-accent"></div>
      {/* <div className="Footer__Contents"> */}
      <h2 className="Footer__Logo">
        <strong>JACK SOLARO</strong>
      </h2>

      <div>
        <a href="/">
          <i className="Footer__Icon fab fa-github fa-2x"></i>
        </a>
        <a href="/">
          <i className="Footer__Icon fab fa-linkedin fa-2x"></i>
        </a>
        <a href="/">
          <i class="Footer__Icon fas fa-file-pdf fa-2x"></i>
        </a>
        <a href="tel:3103184555">
          <i class="Footer__Icon fas fa-phone-square fa-2x"></i>
        </a>
        <a href="mailto:jacksolaro@gmail.com">
          <i class="Footer__Icon fas fa-envelope-square fa-2x"></i>
        </a>
      </div>

      <div className="Footer__Copyright">Copyright&copy; 2020 Jack Solaro</div>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
