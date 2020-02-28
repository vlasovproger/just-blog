import React, { Component } from "react";
import "./spinner.scss";

export default class Spinner extends Component {
  componentDidMount() {
    const preloader: HTMLElement = document.getElementById(
      "preload"
    ) as HTMLElement;
    function fadeOutnojquery(el: HTMLElement): void {
      el.style.opacity = "1";
      const interhellopreloader = setInterval(function() {
        el.style.opacity = (Number(el.style.opacity) - 0.05).toString();
        if (Number(el.style.opacity) <= 0.05) {
          clearInterval(interhellopreloader);
          preloader.style.display = "none";
        }
      }, 16);
    }
    window.onload = function() {
      setTimeout(function() {
        fadeOutnojquery(preloader);
      }, 1000);
    };
  }

  render() {
    return (
      <div id="preloader">
        <div id="preload"></div>
      </div>
    );
  }
}
