import { action, observable, configure } from "mobx";
import { useStaticRendering } from "mobx-react";
import remotedev from "mobx-remotedev";

const isServer = typeof window === "undefined";

useStaticRendering(isServer);
configure({ enforceActions: "observed" });

class BlogStore {
  @observable articles = [];
  @observable currentArticle = {};
  @observable loadingArticles = true;
  @observable loadingArticle = true;
  @observable step = 1;
  @observable error = false;
  @action.bound fetchArticles(blogService) {
    blogService
      .getArticles()
      .then(
        action(data => {
          this.articles = data;
          this.loadingArticles = false;
        })
      )
      .catch(err => (this.error = err));
  }
  @action.bound fetchArticle(id, blogService) {
    blogService
      .getArticle(id)
      .then(
        action(data => {
          this.currentArticle = data;
          this.loadingArticle = false;
        })
      )
      .catch(err => (this.error = err));
  }
}

export default remotedev(BlogStore, { global: true });
