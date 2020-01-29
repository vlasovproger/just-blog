import React from "react";
import VerticalLines from "../vertical-lines";
import LazyImage from "../lazy-image";
import faker from "faker";
import "./about-content.scss";

const AboutContent = () => {
  return (
    <main>
      <section id="about">
        <div className="wrapper">
          <VerticalLines />
          <h4 className="subtitle">we are tatee</h4>
          <h1>
            Our bulding are inspired by the challenge of balancing function &
            beauty .
          </h1>
          <LazyImage src="/images/teem.jpg" />
          <p>
            Justblog is a simple blog with several pages, made using modern
            technologies such as React, MobX, Next and others. All information
            is generated on the fly because there is no server part of the
            project. All information presented on this site is an imitation of
            it, including contact information.
          </p>
          <h4 className="about-list-subtitle">Awesome people</h4>
          <h2>Meat the team</h2>
          <ul className="team">
            <li>
              <LazyImage src={faker.image.avatar()} />
              <h4>{`${faker.name.firstName()} ${faker.name.lastName()}`}</h4>
              <span>Web Developer</span>
            </li>
            <li>
              <LazyImage src={faker.image.avatar()} />
              <h4>{`${faker.name.firstName()} ${faker.name.lastName()}`}</h4>
              <span>Web Developer</span>
            </li>
            <li>
              <LazyImage src={faker.image.avatar()} />
              <h4>{`${faker.name.firstName()} ${faker.name.lastName()}`}</h4>
              <span>Web Developer</span>
            </li>
            <li>
              <LazyImage src={faker.image.avatar()} />
              <h4>{`${faker.name.firstName()} ${faker.name.lastName()}`}</h4>
              <span>Web Developer</span>
            </li>
            <li>
              <LazyImage src={faker.image.avatar()} />
              <h4>{`${faker.name.firstName()} ${faker.name.lastName()}`}</h4>
              <span>Web Developer</span>
            </li>
            <li>
              <LazyImage src={faker.image.avatar()} />
              <h4>{`${faker.name.firstName()} ${faker.name.lastName()}`}</h4>
              <span>Web Developer</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutContent;
