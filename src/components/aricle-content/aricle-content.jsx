import React, { useEffect } from "react";
import { observer } from "mobx-react";
import useStores from "../../hooks/use-stores";
import useServiceContext from "../../hooks/use-service-context";
import moment from "moment";
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
  return (
    <main>
      <section id="article">
        <div className="wrapper">
          <h1>{title}</h1>
          <span className="date">
            {moment(date).format("DD - MMMM - YYYY")}
          </span>
          <img src={imageUrl} alt="Article image" />
          <p>{text}</p>
        </div>
      </section>
    </main>
  );
});

export default ArticleContent;
