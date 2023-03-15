
import React from 'react'
import reactLogo from "../assets/avatar.svg";

const About = () => {
  return (
    <div className="back">
      <div className="container">
        <div className="logo">
          <img src={reactLogo} width='80px' height='80px' alt="" />
        </div>
        <div className="header">Hello My Name is Erimias</div>
        <div className="description">
          <p> I am 4th year software student in AASTU </p>
        </div>
        <div className="links">
          <a href="">
            {" "}
            <img src="" /> Facebok
          </a>
          <a href="">
            {" "}
            <img src="" /> Telegram
          </a>
          <a href="">
            {" "}
            <img src="" /> Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default About