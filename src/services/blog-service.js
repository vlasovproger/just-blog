import firebase from "../lib/db";

export default class ContentService {
  getArticles = async (step = 1) => {
    const articlesRef = firebase
      .database()
      .ref("articles/articles")
      .orderByKey()
      .startAt(`${step * 6}`)
      .limitToFirst(6);
    let result = await new Promise((resolve, reject) => {
      articlesRef.on("value", snapshot => {
        resolve(snapshot);
      });
    });

    return Object.values(result.val());
  };

  getArticle = async id => {
    const articlesRef = firebase
      .database()
      .ref("articles/articles")
      .orderByChild("id")
      .equalTo(id);
    let result = await new Promise((resolve, reject) => {
      articlesRef.on("value", snapshot => {
        resolve(snapshot);
      });
    });

    const article = Object.values(result.val())[0];
    article.imageUrl = article.imageUrl.replace(/[0-9/]{4,7}$/, "1920/1080");
    return article;
  };
}
