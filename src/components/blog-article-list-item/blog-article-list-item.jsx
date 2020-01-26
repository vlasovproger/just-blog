import React from "react";
import "./blog-article-list-item.scss";

const BlogArticleListItem = () => {
  return (
    <div className="blog-item">
      <img src="https://picsum.photos/960/540" alt="Article image" />
      <h2 className="title">
        the villa overlooks dramatic mountainous scenery
      </h2>
      <span className="date">12 - August - 2018</span>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
        placeat, inventore rerum aspernatur reprehenderit similique, sint
        consequuntur porro quisquam quis eum tenetur quia tempore dolores nulla
        ex vel ut officiis?
      </p>
    </div>
  );
};

export default BlogArticleListItem;
