import React, { useEffect } from "react";
import BlogArticleList from "../blog-article-list";
import { observer } from "mobx-react";
import useStores from "../../hooks/use-stores";
import useServiceContext from "../../hooks/use-service-context";
import BlogHeroSection from "../blog-hero-section";
import VerticalLines from "../vertical-lines";
import Spinner from "../spinner";
import FetchArticlesButton from "../fetch-articles-button";
import "./blog-content.scss";

const BlogContent: React.FC = observer(() => {
  const {
    blogStore: { articles, fetchArticles, loadingArticles }
  } = useStores();
  const { blogService } = useServiceContext();
  useEffect(() => {
    fetchArticles(blogService);
  }, []);

  if (loadingArticles) {
    return <Spinner />;
  } else {
    return (
      <main>
        <BlogHeroSection
          article={articles[Math.floor(Math.random() * (articles.length - 1))]}
        />
        <section id="blog">
          <div className="wrapper">
            <VerticalLines />
            <h4>Our Blog</h4>
            <h1>Latest News</h1>
            <BlogArticleList articles={articles} />
            <FetchArticlesButton />
          </div>
        </section>
      </main>
    );
  }
});

export default BlogContent;
