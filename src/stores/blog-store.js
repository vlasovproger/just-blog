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
  @observable step = 6;
  @observable error = false;
  @action.bound fetchArticles(blogService) {
    this.loadingArticles = true;
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
  @action.bound fetchNextArticles(blogService) {
    blogService
      .getArticles(this.step)
      .then(
        action(data => {
          this.articles= [ ...this.articles, ...data ]
          this.step++;
        })
      )
      .catch(err => (this.error = err));
  }
  @action.bound fetchArticle(id, blogService) {
    this.loadingArticle = true;
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
