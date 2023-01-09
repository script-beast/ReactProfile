import React from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

export default function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    document.getElementById("btnText").innerHTML = "Thanks";
    document.getElementById("subbtn").classList.add("subactive");

    emailjs
      .sendForm(
        "service_64csm65",
        "template_faxsfbq",
        e.target,
        "user_Uz5nASrw2MUp427QUG9tR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="background" id="contact">
      <div className="concontainer" data-aos="flip-right">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">
                Ankit Prajapati <br /> Ankitkp028@gmail.com
              </div>
            </div>
            <div className="screen-body-item">
              <form onSubmit={sendEmail}>
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="YOUR NAME"
                      name="from_name"
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      name="from_email"
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <textarea
                      className="app-form-control"
                      placeholder="MESSAGE"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <div className="app-form-group buttons">
                    <button id="subbtn">
                      <p id="btnText">Submit</p>
                      <div className="check-box">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                        >
                          <path
                            fill="transparent"
                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
