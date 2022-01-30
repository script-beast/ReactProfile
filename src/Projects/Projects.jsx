import React from 'react';
import './Projects.css';

export default function Projects() {
    return (
        <div className="FullBody" id="projects" >
            <div className="projtitle">    <div className="sign">
                <span className="fast-flicker">P</span>ro<span className="flicker">J</span>ects
            </div></div>
            <div className="projectbody" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className="projecttainer">
                    <div className="projectbox c2">
                        <span></span>
                        <div className="projecttent">
                            <h2>Windows Payload</h2>
                            <p>This is Python code for making payload and running server to excute command from your system to victim system.</p>
                            <a target="_blank" href="https://github.com/script-beast/py_windows_payload">Read More</a>
                        </div>
                    </div>
                    <div className="projectbox c3">
                        <span></span>
                        <div className="projecttent">
                            <h2>Wi-Fi Dos</h2>
                            <p>This is small Python program for Dos attack on wifi.The program will also work if u r not connect to the Wifi .</p>
                            <a target="_blank" href="https://github.com/script-beast/Py_wifi_dos">Read More</a>
                        </div>
                    </div>
                    <div className="projectbox c1">
                        <span></span>
                        <div className="projecttent">
                            <h2>Covid Vacination</h2>
                            <p>A small website made using Express,EJS,nodejs. It is a website made to keep records for those who are
                                vaccinated and give updates and charts of the affected people</p>
                            <a target="_blank" href="https://github.com/script-beast/CovidVaccination_Web">Read More</a>&nbsp;&nbsp;
                            <a target="_blank" href=" https://covidvacination.herokuapp.com/">Visit</a>
                        </div>
                    </div>
                    <div className="projectbox c4">
                        <span></span>
                        <div className="projecttent">
                            <h2>React Keeper App</h2>
                            <p>A small Project made using React. It keeps all the Notes and save to your browser local storage.</p>
                            <a target="_blank" href="https://github.com/script-beast/Keeper_App_React">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
