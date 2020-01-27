import React from "react";
import Link from "next/link";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-content">
          <div className="main-info">
            <ul>
              <h4>JustBlog</h4>
              <li>Address : 991 White St . Dawsonville, GA 30534 , New York</li>
              <li>Phone number : + (898) 784-7217</li>
              <li>Email : Tatee.architecture@gmail.com</li>
            </ul>
          </div>
          <div className="links">
            <h4>Links</h4>
            <ul>
              <li>
                <Link href="/blog" prefetch={false}>
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/about" prefetch={false}>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" prefetch={false}>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="socials">
            <h4>Socials</h4>
            <ul>
              <li>
                <a
                  href="https://facebook.com/"
                  aria-label="facebook"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="icon icon-facebook"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/"
                  aria-label="instagram"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="icon icon-instagram"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  aria-label="twitter"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="icon icon-twitter"></span>
                </a>
              </li>

              <li>
                <a
                  href="https://pinterest.com/"
                  aria-label="pinterest"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="icon icon-pinterest"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://google.com/"
                  aria-label="google"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="icon icon-google"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
