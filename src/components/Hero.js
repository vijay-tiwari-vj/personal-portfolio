import React from 'react';
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CSSPlugin } from 'gsap/CSSPlugin';
import Container from 'react-bootstrap/Container';

export const Hero = () => {
  const circle = React.useRef(null);

  gsap.registerPlugin(CSSPlugin);
  gsap.registerPlugin(MotionPathPlugin);
  gsap.config({
    nullTargetWarn: false
  });

  gsap.to(circle.current, {
    motionPath: {
      path: "#path",
      align: "#path",
      alignOrigin: [0.5, 0.5],
      start: -0.5,
      end: 1.5
    },
    duration: 5,
    ease: "linear",
    repeat: -1
  });

  return (
    <>
      <Container className="home">
        <div className="animation">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="140 60 340 340" width="100%" height="100%" id="svg"><path d="M456.43 223.42C456.43 305.2 389.22 371.59 306.43 371.59C223.64 371.59 156.43 305.2 156.43 223.42C156.43 141.64 223.64 75.25 306.43 75.25C389.22 75.25 456.43 141.64 456.43 223.42Z" id="path" fill="none" stroke="none"></path>
            <g>
              <circle ref={circle} cx="0" cy="0" r="6" fill="#fff" />
            </g>
          </svg>
          <div className="about-me">
            <h1>Hi, I'm Vijay<i className="far fa-hand-peace"></i></h1>
            <p>a developer</p>
          </div>
        </div>
        <div className="img-container">
          <img
            className="image"
            src="https://i.imgur.com/1b43faD.png"
            alt="Vijay"
          />
        </div>
      </Container>
    </>
  )
}

export default Hero;
