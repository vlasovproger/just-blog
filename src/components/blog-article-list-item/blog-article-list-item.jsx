import React from "react";
import Link from "next/link";
import LazyImage from "../lazy-image";
import months from "../../helpers/months";
import "./blog-article-list-item.scss";

const BlogArticleListItem = ({ title, id, description, date, imageUrl }) => {
  const fixedDate = new Date(date);
  let day = fixedDate.getDay();
  day = day < 10 ? `0${day}` : day;
  const month = months[fixedDate.getMonth()];
  const year = fixedDate.getFullYear();
  return (
    <div className="blog-item">
      <Link href={`/article/${id}`} prefetch={false}>
        <a>
          <div className="image-wrapper">
            <LazyImage src={imageUrl} alt="Article image" />
          </div>

          <h2 className="title">{title}</h2>
        </a>
      </Link>

      <span className="date">{`${day} - ${month} - ${year}`}</span>
      <p className="description">{description}</p>
    </div>
  );
};

export default BlogArticleListItem;
