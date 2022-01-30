import React from 'react';
import './Icons.css'
import './Profile.css'

export default function Profile() {
    return (
        <><div className='homecontainer'>
            <div className="container_content">
                <div className="container_content_inner has-text-centered m-3">
                    <div className="title">
                        <h1 className="proh1">Ankit Prajapati</h1>
                    </div>
                    
                    <div className="par">
                        <p className="prop">
                            A Web Developer And Tech Enthusiast. Practicing MERN Stack And Enjoys Creating A New Web Application.
                            Also, I Am Good At Dsa In C++ And Python. Apart From That,
                            I Have Great Knowledge Of Web Security. <br /><br />
                        </p>
                        <div className="cen">
                            <div className="btn_wrap">
                                <span className="spanbtn">Connect</span>
                                <div className="iconcontainer">
                                    <a target="_blank" href="https://www.linkedin.com/in/ankit-prajapati-8056aa194/"><i className="fab fa-linkedin-in btni"></i></a>
                                    <a target="_blank" href="https://www.codechef.com/users/ankitkp028"><i className="fas fa-code btni"></i></a>
                                    <a target="_blank" href="https://www.hackerrank.com/ankitkp028"><i className="fab fa-hackerrank btni"></i></a>
                                    <a target="_blank" href="https://github.com/script-beast"><i className="fab fa-github btni"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="overlay"></div></>
    );
}
