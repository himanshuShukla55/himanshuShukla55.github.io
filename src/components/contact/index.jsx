import React from "react";
import { BsGithub, BsLinkedin, BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { openLinkInNewTab as handleContact } from "../../utils";

import "./index.scss";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <div>
        <div id="contact-github">
          <span className="tooltip">Github</span>
          <BsGithub
            id="contact-github"
            onClick={() => handleContact("https://github.com/himanshuShukla55")}
          />
        </div>
        <div id="contact-linkedin">
          <span className="tooltip">LinkedIn</span>
          <BsLinkedin
            id="contact-linkedin"
            style={{ color: "#0A64C2" }}
            onClick={() =>
              handleContact(
                "https://www.linkedin.com/in/himanshu-shukla-bb6b1b192/"
              )
            }
          />
        </div>
        <div id="contact-phone">
          <span className="tooltip">Phone</span>
          <BsTelephone id="contact-phone" />
        </div>
        <div id="contact-email">
          <span className="tooltip">Email</span>
          <TfiEmail id="contact-email" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
