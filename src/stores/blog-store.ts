import { action, configure, observable, runInAction } from "mobx";
import { useStaticRendering } from "mobx-react";
import { IArticle, IBlogService } from "../interfaces";
import remotedev from "mobx-remotedev";

const isServer = typeof window === "undefined";

useStaticRendering(isServer);
configure({ enforceActions: "observed" });
class BlogStore {
  @observable articles: Array<IArticle> = [];
  @observable currentArticle: IArticle = {
    author: "Initial author",
    category: "Initial category",
    date: "Initial date",
    description: "Initial description",
    id: "Initial id",
    imageUrl: "Initial imageUrl",
    text: "Initial text",
    title: "Initial title"
  };
  @observable loadingArticles: boolean = true;
  @observable loadingArticle: boolean = true;
  @observable step: number = 5;
  @observable error: boolean = false;
  @action.bound async fetchArticles(blogService: IBlogService): Promise<any> {
    this.loadingArticles = true;
    const data: Array<IArticle> = await blogService.getArticles();
    runInAction(() => {
      this.articles = data;
      this.loadingArticles = false;
    });
  }
  @action.bound async fetchNextArticles(
    blogService: IBlogService
  ): Promise<any> {
    blogService;
    const data: Array<IArticle> = await blogService.getArticles(this.step);
    runInAction(() => {
      this.articles = [...this.articles, ...data];
      this.step++;
    });
  }
  @action.bound async fetchArticle(
    id: string,
    blogService: IBlogService
  ): Promise<any> {
    this.loadingArticle = true;
    const data: IArticle = await blogService.getArticle(id);
    runInAction(() => {
      this.currentArticle = data;
      this.loadingArticle = false;
    });
  }
}

export default remotedev(BlogStore, { global: true });
