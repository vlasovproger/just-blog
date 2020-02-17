import React, { useEffect } from "react";
import { observer } from "mobx-react";
import useStores from "../../hooks/use-stores";
import useServiceContext from "../../hooks/use-service-context";
import LazyImage from "../lazy-image";
import VerticalLines from "../vertical-lines";
import Spinner from "../spinner";
import "./aricle-content.scss";
import months from "../../helpers/months";

const ArticleContent = observer(({ id }) => {
  const {
    blogStore: {
      currentArticle: { title, date, imageUrl, text },
      fetchArticle,
      loadingArticle
    }
  } = useStores();
  const { blogService } = useServiceContext();
  useEffect(() => {
    fetchArticle(id, blogService);
  }, [id]);

  if (loadingArticle) {
    return <Spinner />;
  } else {
    let day = date.getDay();
    day = day < 10 ? `0${day}` : day;
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return (
      <main>
        <section id="article">
          <div className="wrapper">
            <VerticalLines />
            <h1>{title}</h1>
            <span className="date">{`${day} - ${month} - ${year}`}</span>
            <LazyImage src={imageUrl} alt="Article image" />
            <p>{text}</p>
          </div>
        </section>
      </main>
    );
  }
});

export default ArticleContent;
