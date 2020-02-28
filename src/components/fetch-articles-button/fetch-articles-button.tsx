import React from "react";
import { observer } from "mobx-react";
import useStores from "../../hooks/use-stores";
import useServiceContext from "../../hooks/use-service-context";
import "./fetch-articles-button.scss";

const FetchArticlesButton: React.FC = observer(() => {
  const {
    blogStore: { fetchNextArticles }
  } = useStores();
  const { blogService } = useServiceContext();
  const handleToggled = () => {
    fetchNextArticles(blogService);
  };

  return (
    <div className="fetch-articles-button" onClick={handleToggled}>
      Load more...
    </div>
  );
});

export default FetchArticlesButton;
