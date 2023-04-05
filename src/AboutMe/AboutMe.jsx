import React from 'react';
import './AboutMe.css'
import './Card.css'
import "./Desc.css"
import Typewriter from 'typewriter-effect'
import aboutImag from '../Assests/Img/about-img.jpg'

export default function AboutMe() {
  return (
    <div className="about-wrapper" id="aboutMe" data-aos="flip-up">
      <div className="about-left">
        <div className="about-left-content">
          <div className="mdl">
            <div className="circles">
              <div className="circle circle-1"></div>
              <div className="circle circle-3"></div>
            </div>
          </div>
          <div data-tilt className="aboutcard">
            <div className="shadow">
              <div className="about-img">
                <img src={aboutImag} alt="about image" />
              </div>
            </div>
            <h2>Ankit<br />Prajapati</h2>
            <h3>Web Developer <br /> (Cyber Security)</h3>
          </div>
        </div>
      </div>
      <div className="about-right">
        <h1>hi<span>!</span></h1>
        <h2>Here's who I am <br /> <Typewriter
          options={{
            strings: ['Web Developer 📝', 'Tech Enthusiast 💻', 'Full Stack Practitioner 👨‍🎓', 'Cyber Security Analyst 🌐'],
            autoStart: true,
            delay: 'natural',
            loop: true,
          }} /></h2>
        <div className="about-para">
          <div className='container'>
            <h2 className="desch2">Hover </h2>
            <h2 className="desch2">Here</h2>
            <div className='text'>
              <div className='inner'>
                <h3> <span> Age : </span> 21 </h3>
                <h3> <span> Degree : </span> B. tech (2019-23)</h3>
                <h3> <span> Specialization : </span> Computer Sci. and Information Tech. </h3>
                <h3> <span> Post : </span> Full Stack developer </h3>
                <h3> <span> City : </span> Delhi, India </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="about-btns">
          <a target="_blank" href="https://drive.google.com/file/d/1ICuMKhaWoTdMze0RWgqnz7XmNWqHY-5-/view"><button type="button" className="btn btn-pink"> <i className="fas fa-download"></i> resume</button></a>
          <a href="#projects"><button type="button" className="btn btn-white"><i className="fas fa-code"></i> projects</button></a>
        </div>
      </div>
    </div>
  );
}
