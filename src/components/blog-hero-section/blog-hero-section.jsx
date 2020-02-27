import React from "react";
import Link from "next/link";
import { Parallax } from "react-parallax";
import "./blog-hero-section.scss";

const BlogHeroSection = ({ article: { title, description, imageUrl, id } }) => {
  const imageUrlFull = imageUrl.replace(/[0-9/]{4,7}$/, "1920/1080");
  return (
    <section id="hero">
      <Parallax
        bgImage={imageUrlFull}
        bgImageAlt="paralax header image"
        strength={500}
      >
        <div className="wrapper">
          <div className="hero-section-content">
            <h1>{title}</h1>
            <p>{description}</p>

            <Link href={`/article/${id}`} prefetch={false}>
              <a>
                <span className="icon icon-arrow-right">READ THIS ARTICLE</span>
              </a>
            </Link>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default BlogHeroSection;
