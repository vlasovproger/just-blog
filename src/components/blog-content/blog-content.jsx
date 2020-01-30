import React, { useEffect } from "react";
import BlogArticleList from "../blog-article-list";
import { observer } from "mobx-react";
import useStores from "../../hooks/use-stores";
import useServiceContext from "../../hooks/use-service-context";
import VerticalLines from "../vertical-lines";
import Spinner from "../spinner";
import "./blog-content.scss";

const BlogContent = observer(() => {
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
        <section id="blog">
          <div className="wrapper">
            <VerticalLines />
            <h4>Our Blog</h4>
            <h1>Latest News</h1>
            <BlogArticleList articles={articles} />
          </div>
        </section>
      </main>
    );
  }
});

export default BlogContent;
