import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about ">
      <div className="light x2"></div>
      <div className="light x1"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
      <div className="about-top">
        <div className="about-info">
          Hello👋, I am Harsh Jain<br /><br />
          <span className="info-name">A Frontend Developer,<br /> 
           Devops learner<br /> 
          and a Bulbasaur fan!!! </span><br /> 
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/my.jpg").default}
            className="picture"
            alt="my pic"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
