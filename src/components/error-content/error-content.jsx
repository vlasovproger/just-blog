import React from "react";
import VerticalLines from "../vertical-lines";
import "./error-content.scss";

const ErrorContent = () => {
  return (
    <main>
      <section id="error">
        <div className="wrapper">
          <VerticalLines />

          <h1>404</h1>
          <h4 className="subtitle">page not found</h4>
        </div>
      </section>
    </main>
  );
};

export default ErrorContent;
