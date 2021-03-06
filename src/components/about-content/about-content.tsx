import React from "react";
import VerticalLines from "../vertical-lines";
import LazyImage from "../lazy-image";
import "./about-content.scss";

const AboutContent: React.FC = () => {
  return (
    <main>
      <section id="about">
        <div className="wrapper">
          <VerticalLines />
          <h4 className="subtitle">this is</h4>
          <h1>JustBlog</h1>
          <LazyImage src="/images/teem.jpg" alt="team" />
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
              <LazyImage src="/images/avatar-circle.png" alt="avatar image" />
              <h4>Name Surname</h4>
              <span>Web Developer</span>
            </li>
            <li>
              <LazyImage src="/images/avatar-circle.png" alt="avatar image" />
              <h4>Name Surname</h4>
              <span>Web Developer</span>
            </li>
            <li>
              <LazyImage src="/images/avatar-circle.png" alt="avatar image" />
              <h4>Name Surname</h4>
              <span>Web Developer</span>
            </li>
            <li>
              <LazyImage src="/images/avatar-circle.png" alt="avatar image" />
              <h4>Name Surname</h4>
              <span>Web Developer</span>
            </li>
            <li>
              <LazyImage src="/images/avatar-circle.png" alt="avatar image" />
              <h4>Name Surname</h4>
              <span>Web Developer</span>
            </li>
            <li>
              <LazyImage src="/images/avatar-circle.png" alt="avatar image" />
              <h4>Name Surname</h4>
              <span>Web Developer</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutContent;
