import React from 'react';
import Profile from '../Home/Profile'
import AboutMe from '../AboutMe/AboutMe'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import ContactForm from '../ContactForm/ContactForm'
import './NavBar.css';
import Logo from '../Assests/Img/about-img.jpg'

export default function NavBar() {

    const body = document.querySelector('body')

    function navbar() {
        body.querySelector('nav').classList.toggle("close");
    }

    function swit() {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            body.querySelector(".mode-text").innerText = "Light mode";
        } else {
            body.querySelector(".mode-text").innerText = "Dark mode";

        }
    }

return (
    <>
        <nav className="navsidebar close">
            <header className="siheader">
                <div className="image-text">
                    <span className="image">
                        <img src={Logo} alt="" />
                    </span>

                    <div className="navtext logo-text">
                        <span className="name">Ankit Prajapati</span>
                        <span className="profession">Web developer</span>
                    </div>
                </div>

                <i className='bx bx-chevron-right toggle' onClick={navbar}></i>
            </header>
            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                        <li className="nav-link">
                            <a href="#" >
                                <i className='bx bx-home icon' ></i>
                                <span className="navtext nav-text">Home</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#aboutMe" >
                                <i className='bx bx-user icon' ></i>
                                <span className="navtext nav-text">AboutMe</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#skills" >
                                <i className='bx bx-bar-chart-alt-2 icon' ></i>
                                <span className="navtext nav-text">Skills</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#projects" >
                                <i className='bx bx-code-curly icon'></i>
                                <span className="navtext nav-text">Projects</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#contact" >
                                <i className='bx bx-mail-send icon'></i>
                                <span className="navtext nav-text">ContactMe</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bottom-content">
                    <li className="mode">
                        <div className="sun-moon">
                            <i className='bx bx-moon icon moon'></i>
                            <i className='bx bx-sun icon sun'></i>
                        </div>
                        <span className="mode-text navtext">Dark mode</span>

                        <div className="toggle-switch" onClick={swit}>
                            <span className="switch"></span>
                        </div>
                    </li>

                </div>
            </div>

        </nav>
        <div className="home">
        <Profile />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactForm />
        </div>
    </>
);
}
