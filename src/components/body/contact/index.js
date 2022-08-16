import React from "react";
import "./contact.css";
import SocialContact from "../../common/social-contact/index";
import Separator from "../../common/separator/index";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me here</p>
          <p>📞 9522216823</p>
          <p>📧 hjain012003@gmail.com </p>
          <p> or reach out on any of these platforms</p>
          <SocialContact />
        </div>
        <div className = "center">
          OR
        </div>
        <div className="download">
          <a href={require("../../../assets/myresume.pdf").default}>
          <i class="fi fi-rr-document-signed"></i>
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
