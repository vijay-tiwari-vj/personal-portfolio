import React from 'react';
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const getNavbar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#work">Work</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

const motion = () => (
  // <svg width="100%" height="100%" viewBox="0 0 557 190" id="svg">
  //   {/* create a circle circulating around about-me div */}
  //   <circle cx="100" cy="100" r="3" />
  //   <circle cx="300" cy="20" r="3" />
  //   <path id="path" d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37" fill="none" />
  //   <g id="rect">
  //     <rect width="85" height="30" fill="dodgerblue" />
  //     <text x="10" y="19" font-size="14">SVG &lt;rect&gt;</text>
  //   </g>
  // </svg>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="140 70 350 350" width="100%" height="100%" id="svg"><path d="M456.43 223.42C456.43 305.2 389.22 371.59 306.43 371.59C223.64 371.59 156.43 305.2 156.43 223.42C156.43 141.64 223.64 75.25 306.43 75.25C389.22 75.25 456.43 141.64 456.43 223.42Z" id="path" fill="none" stroke="#ddd"></path>
    <g id="circle">
      <circle cx="0" cy="0" r="6" fill="#333" />
    </g>
  </svg>
);

export const Hero = () => {
  return (
    <>
      {getNavbar()}
      <Container className="home">
        <div className="animation">
          {motion()}
          <div className="about-me">
            <h1>Hi, I'm Vijay<i className="far fa-hand-peace"></i></h1>
            <p>a developer</p>
          </div>
        </div>
        <div className="img-container">
          <img
            className="image"
            src="https://i.imgur.com/0pZOI7a.png"
            alt="Vijay"
          />
        </div>
      </Container>
    </>
  )
}

gsap.registerPlugin(MotionPathPlugin);

gsap.to("#circle", {
  duration: 5,
  ease: "power1.inOut",
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5]
  }
});

export default Hero;
