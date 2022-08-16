import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about ">
      <div className="about-top">
        <div className="about-info">
          Hello👋, I am Harsh Jain<br /><br />
          <span className="info-name">A Frontend Developer,<br /> 
           Devops learner<br /> 
          and a Bulbasaur fan!!! </span><br /> 
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/coding.png").default}
            className="picture"
            alt="coding guy"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
