import React from "react";
import BlogArticleListItem from "../blog-article-list-item";
import './blog-article-list.scss';

const BlogArticleList = () => {
  return (
    <ul className="blog-article-list">
      <li>
        <BlogArticleListItem />
      </li>
      <li>
        <BlogArticleListItem />
      </li>
      <li>
        <BlogArticleListItem />
      </li>
      <li>
        <BlogArticleListItem />
      </li>
      <li>
        <BlogArticleListItem />
      </li>
      <li>
        <BlogArticleListItem />
      </li>
      <li>
        <BlogArticleListItem />
      </li>
      <li>
        <BlogArticleListItem />
      </li>
      <li>
        <BlogArticleListItem />
      </li>
    </ul>
  );
};

export default BlogArticleList;
