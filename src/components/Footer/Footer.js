import React from "react";
import "./Footer.css";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import DescriptionIcon from "@material-ui/icons/Description";
import resumeLink from "../../images/Jack_Solaro_Resume.pdf";

function Footer() {
  return (
    // <!-- Footer -->
    <footer id="contact" className="">
      <div className="footer-accent"></div>
      {/* <div className="Footer__Contents"> */}
      <h2 className="Footer__Logo">
        <strong>JACK SOLARO</strong>
      </h2>

      <div>
        <a
          href="https://github.com/jacksolaro"
          rel="noreferrer"
          target="_blank"
        >
          <i className="Footer__Icon fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jacksolaro/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="Footer__Icon fab fa-linkedin fa-2x"></i>
        </a>
        <a target="_blank" href={resumeLink}>
          <i class="Footer__Icon fas fa-file-pdf fa-2x"></i>
        </a>
      </div>
      <div>
        <a href="tel:3103184555">
          {/* <i class="Footer__Icon fas fa-phone-square fa-2x"></i> */}
          (310)318-4555
        </a>
      </div>
      <div>
        <a href="mailto:jacksolaro@gmail.com">
          {/* <i class="Footer__Icon fas fa-envelope-square fa-2x"></i> */}
          jacksolaro@gmail.com
        </a>
      </div>

      <div className="Footer__Copyright">Copyright&copy; 2020 Jack Solaro</div>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
