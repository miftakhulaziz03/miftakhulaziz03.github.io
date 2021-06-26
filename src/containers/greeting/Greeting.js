import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.css";
// import landingPerson from "../../assets/lottie/landingPerson";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>

              <div className="button-greeting-div">
                
                <Button text="Contact Me" href="#contact" />
                <Button
                  text="My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
              <p className={
                  isDark
                    ? "dark-mode greeting-text-p1"
                    : "greeting-text-p1 texts"
                }>{greeting.texts}
                </p>
              <SocialMedia/>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/programmer.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
