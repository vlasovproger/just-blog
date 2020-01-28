import React, { useEffect } from "react";
import { observer } from "mobx-react";
import useStores from "../../hooks/use-stores";
import useServiceContext from "../../hooks/use-service-context";
import moment from "moment";
import LazyImage from "../lazy-image";
import VerticalLines from "../vertical-lines";
import "./aricle-content.scss";

const ArticleContent = observer(({ id }) => {
  const {
    blogStore: {
      currentArticle: { title, date, imageUrl, text },
      fetchArticle
    }
  } = useStores();
  const { blogService } = useServiceContext();
  useEffect(() => {
    fetchArticle(id, blogService);
  }, [id]);
  if (title) {
    return (
      <main>
        <section id="article">
          <div className="wrapper">
            <VerticalLines />
            <h1>{title}</h1>
            <span className="date">
              {moment(date).format("DD - MMMM - YYYY")}
            </span>
            <LazyImage src={imageUrl} alt="Article image" />
            <p>{text}</p>
          </div>
        </section>
      </main>
    );
  } else {
    return <div>loading...</div>;
  }
});

export default ArticleContent;