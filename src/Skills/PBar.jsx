import React from 'react';
import './PBar.css';

export default function PBar() {
  return (
    <div className="PBar" data-aos="zoom-in-up">
      <h5 className="Bheading"> My <span>Skills</span></h5>
      <div className="Barbox-container">
        <div className="boxa">
          <div className="ptext">HTML && CSS</div>
          <div className="Barprogress"><span className="Barprogress-bar" style={{width: "80%"}}>80</span></div>
        </div>
        <div className="boxa">
          <div className="ptext">JavaScript</div>
          <div className="Barprogress"><span className="Barprogress-bar" style={{width: "75%"}}>75</span></div>
        </div>
        <div className="boxa">
          <div className="ptext">React</div>
          <div className="Barprogress"><span className="Barprogress-bar" style={{width: "50%"}}>50</span></div>
        </div>
        <div className="boxa">
          <div className="ptext">NodeJs && Express</div>
          <div className="Barprogress"><span className="Barprogress-bar" style={{width: "60%"}}>60</span></div>
        </div>
        <div className="boxa">
          <div className="ptext">EJS</div>
          <div className="Barprogress"><span className="Barprogress-bar" style={{width: "80%"}}>80</span></div>
        </div>
        <div className="boxa">
          <div className="ptext">MongoDB</div>
          <div className="Barprogress"><span className="Barprogress-bar" style={{width: "70%"}}>70</span></div>
        </div>
        <div className="boxa">
          <div className="ptext">MySQL</div>
          <div className="Barprogress"><span className="Barprogress-bar" style={{width: "70%"}}>70</span></div>
        </div>
        <div className="boxa">
          <div className="ptext">C++</div>
          <div className="Barprogress"><span className="Barprogress-bar" style={{width: "70%"}}>70</span></div>
        </div>
        <div className="boxa">
          <div className="ptext">Python</div>
          <div className="Barprogress"><span className="Barprogress-bar" style={{width: "55%"}}>55</span></div>
        </div>
        <div className="boxa">
          <div className="ptext">JAVA</div>
          <div className="Barprogress"><span className="Barprogress-bar" style={{width: "40%"}}>40</span></div>
        </div>
        <div className="boxa">
          <div className="ptext">Linux System</div>
          <div className="Barprogress"><span className="Barprogress-bar" style={{width: "80%"}}>80</span></div>
        </div>
        <div className="boxa">
          <div className="ptext">Kali tools( nmap,brup,Zap,etc )</div>
          <div className="Barprogress"><span className="Barprogress-bar" style={{width: "80%"}}>80</span></div>
        </div>
        <div className="boxa">
          <div className="ptext">GIT</div>
          <div className="Barprogress">
            <span className="Barprogress-bar" style={{width: "40%"}}>40</span>
          </div>
        </div>
      </div>
    </div>
  );
}
