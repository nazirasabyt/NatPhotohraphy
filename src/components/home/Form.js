import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";
import leaf from "../../assets/logo/leaf.png";
import adress from "../../assets/logo/adress.png";
import phone from "../../assets/logo/phone.png";
import email from "../../assets/logo/email.png";

const Contact = () => {
  const form = useRef();
  const [inputs, setInputs] = useState([]);
  const [show, setShow] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hhs7zlv",
        "template_sffviu5",
        form.current,
        "zl_CsHrcUV3uF-mYF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShow(true);
          setTimeout(() => {
            setShow(false);
            setInputs("");
          }, 3000);
        },
        (error) => {
          alert(`${error}! Try again`);
        }
      );
  };
  return (
    <div className="form">
      <div className="form__bg">
        <div className="form__card">
          {!show && (
            <form onSubmit={handleSubmit} ref={form}>
              <p>Let&apos;s chat</p>
              <h2>Get in Touch!</h2>
              <div className="form__inputs">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={inputs.firstName || ""}
                  onChange={handleInput}
                  required
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  value={inputs.lastName || ""}
                  onChange={handleInput}
                />
                <input
                  name="phone"
                  type="number"
                  placeholder="Phone Number"
                  required
                  value={inputs.phone || ""}
                  onChange={handleInput}
                />
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={inputs.email || ""}
                  onChange={handleInput}
                  required
                />
                <textarea
                  type="text"
                  name="message"
                  placeholder="Your Message"
                  value={inputs.message || ""}
                  onChange={handleInput}
                  required
                />
              </div>
              <button type="submit">Send</button>
            </form>
          )}
          {show && <Modal setShow={setShow} />}
          <div className="form__leaf">
            <img src={leaf} />
          </div>
        </div>
      </div>
      <div className="form__contacts">
        <div className="form__contacts-item">
          <img src={adress} />
          <h2>Location</h2>
          <p>Dubai, UAE</p>
        </div>
        <div className="form__contacts-item">
          <img src={email} />
          <h2>Email</h2>
          <p>nat.photography@gmail.com</p>
        </div>
        <div className="form__contacts-item">
          <img src={phone} />
          <h2>Phone</h2>
          <p>+971582834686</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
