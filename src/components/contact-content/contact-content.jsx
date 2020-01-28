import React from "react";
import "./contact-content.scss";

const ContactContent = () => {
  return (
    <main>
      <section id="contact">
        <div className="wrapper">
          <h4>Let’s work with us</h4>
          <h1>Together we can make dream come true</h1>
          <iframe
            src="https://yandex.by/map-widget/v1/-/CKESrUmw"
            frameBorder="1"
            allowFullScreen={true}
            style={{ width: "100%", height: "370px" }}
          ></iframe>
          <form className="info">
            <ul>
              <li>
                <h3>Address:</h3>
                <p>991 White St . Dawsonville GA 30534 , New York</p>
              </li>
              <li>
                <h3>Phone number:</h3>
                <p>+ (898) 784-7217</p>
              </li>
              <li>
                <h3>Email:</h3>
                <p>Tatee.architecture@gmail.com</p>
              </li>
            </ul>
            <div className="user-information">
              <input
                type="text"
                placeholder="Name"
                name="nickname"
                aria-label="enter name"
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                aria-label="enter email"
              />
              <input
                type="tel"
                placeholder="Phone"
                name="email"
                aria-label="enter email"
              />
            </div>
            <textarea
              placeholder="Message*"
              name="message"
              id="message"
              cols="30"
              rows="10"
              aria-label="enter message"
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactContent;
