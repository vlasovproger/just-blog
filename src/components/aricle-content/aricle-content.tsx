import React, { ReactText, useEffect } from "react";
import { observer } from "mobx-react";
import useStores from "../../hooks/use-stores";
import useServiceContext from "../../hooks/use-service-context";
import LazyImage from "../lazy-image";
import VerticalLines from "../vertical-lines";
import Spinner from "../spinner";
import "./aricle-content.scss";
import months from "../../helpers/months";

type articleContentTypes = {
  id: string;
};

const ArticleContent: React.FC<articleContentTypes> = observer(({ id }) => {
  const {
    blogStore: {
      currentArticle: { title, date, imageUrl, text },

      fetchArticle,
      loadingArticle
    }
  } = useStores();
  const { blogService } = useServiceContext();
  useEffect(() => {
    if (id) {
      fetchArticle(id, blogService);
    }
  }, [id]);
  if (loadingArticle) {
    return <Spinner />;
  }

  const fixedDate: Date = new Date(date);
  const day: number = fixedDate.getDay();
  const dayText: ReactText = day < 10 ? `0${day}` : day;
  const month: string = months[fixedDate.getMonth()];
  const year: number = fixedDate.getFullYear();
  return (
    <main>
      <section id="article">
        <div className="wrapper">
          <VerticalLines />
          <h1>{title}</h1>
          <span className="date">{`${dayText} - ${month} - ${year}`}</span>
          <LazyImage src={imageUrl} alt="Article image" />
          <p>{text}</p>
        </div>
      </section>
    </main>
  );
});

export default ArticleContent;
