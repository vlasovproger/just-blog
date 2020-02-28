import firebase from "../lib/db";
import { IArticle, IBlogService} from "../interfaces";

export default class ContentService implements IBlogService{
  getArticles = async (step = 1): Promise<IArticle[]> => {
    const articlesRef = firebase
      .database()
      .ref("articles/articles")
      .orderByKey()
      .startAt(`${step * 6}`)
      .limitToFirst(6);
    let result: any = await new Promise(resolve => {
      articlesRef.on("value", snapshot => {
        resolve(snapshot);
      });
    });

    return Object.values(result.val());
  };

  getArticle = async (id: string): Promise<IArticle> => {
    const articlesRef = firebase
      .database()
      .ref("articles/articles")
      .orderByChild("id")
      .equalTo(id);
    let result: any = await new Promise(resolve => {
      articlesRef.on("value", snapshot => {
        resolve(snapshot);
      });
    });

    const article: any = Object.values(result.val())[0];
    article.imageUrl = article.imageUrl.replace(/[0-9/]{4,7}$/, "1920/1080");
    return article;
  };
}
