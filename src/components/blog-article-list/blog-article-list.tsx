import React from "react";
import BlogArticleListItem from "../blog-article-list-item";
import "./blog-article-list.scss";
import { IArticle } from "../../interfaces";
type ArticleListProps = {
  articles: Array<IArticle>;
};
const BlogArticleList: React.FC<ArticleListProps> = ({ articles }) => {
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
              id={article.id}
              author={article.author}
              category={article.category}
              text={article.text}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BlogArticleList;
