import React from "react";
import BlogArticleListItem from "../blog-article-list-item";
import "./blog-article-list.scss";

const BlogArticleList = ({ articles }) => {
  return (
    <ul className="blog-article-list">
      {articles.map(article => {
        return (
          <li key={article.id}>
            <BlogArticleListItem
              title={article.title}
              description={article.description}
              date={article.date}
              imageUrl={article.imageUrl}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BlogArticleList;
