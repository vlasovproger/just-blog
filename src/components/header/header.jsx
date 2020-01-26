import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./header.scss";

const Header = ({ classNamesHam, onHamburgerToggle }) => {
  const [navShadow, setShadow] = useState("");

  const handleScroll = () => {
    const windowTop = window.scrollY;

    windowTop > 100 ? setShadow("navShadow") : setShadow("");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <div className={`${navShadow} wrapper`}>
        <nav>
          <Link href="/" prefetch={false}>
            <a>
              <img
                className="logo-image"
                src="/images/logo.png"
                alt="logo"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  });
                }}
              />
            </a>
          </Link>
          <ul className="nav-items">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
