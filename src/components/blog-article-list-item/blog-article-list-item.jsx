import React from "react";
import moment from "moment";
import Link from "next/link";
import "./blog-article-list-item.scss";

const BlogArticleListItem = ({ title, id, description, date, imageUrl }) => {
  return (
    <div className="blog-item">
      <Link href={`/article/${id}`} prefetch={false}>
        <a>
          <div className="image-wrapper">
            <img src={imageUrl} alt="Article image" />
          </div>

          <h2 className="title">{title}</h2>
        </a>
      </Link>

      <span className="date">{moment(date).format("DD - MMMM - YYYY")}</span>
      <p className="description">{description}</p>
    </div>
  );
};

export default BlogArticleListItem;
