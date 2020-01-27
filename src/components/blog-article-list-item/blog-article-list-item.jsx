import React from "react";
import moment from "moment";
import "./blog-article-list-item.scss";

const BlogArticleListItem = ({ title, description, date, imageUrl }) => {
  return (
    <div className="blog-item">
      <div className="image-wrapper">
        <img src={imageUrl} alt="Article image" />
      </div>

      <h2 className="title">{title}</h2>
      <span className="date">{moment(date).format("DD - MMMM - YYYY")}</span>
      <p className="description">{description}</p>
    </div>
  );
};

export default BlogArticleListItem;
