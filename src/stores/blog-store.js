import { action, observable, configure } from "mobx";
import { useStaticRendering } from "mobx-react";
import remotedev from "mobx-remotedev";

const isServer = typeof window === "undefined";

useStaticRendering(isServer);
configure({ enforceActions: "observed" });

class BlogStore {
  @observable articles = [];
  @observable loading = true;
  @observable step = 1;
  @observable error = false;
  @action.bound fetchArticles(blogService) {
    blogService
      .getArticles()
      .then(
        action(data => {
          this.articles = data;
        })
      )
      .catch(err => (this.error = err));
  }
}

export default remotedev(BlogStore, { global: true });
