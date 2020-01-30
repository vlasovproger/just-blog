import axios from "axios";
import faker from "faker";

export default class BlogService {
  getImages = async step => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${step}&limit=8`
    );
    return res.data;
  };

  getImage = async id => {
    const res = await axios.get(`https://picsum.photos/id/${id}/info`);

    return res.data;
  };

  getTitle = async () => {
    const title = await faker.random.words(3);
    return title;
  };
  getDescription = async () => {
    const description = await faker.lorem.sentences(2);
    return description;
  };

  getText = async () => {
    const text = await faker.lorem.paragraphs(20);
    return text;
  };

  getArticles = async (step = 5) => {
    const imgRes = await this.getImages(step);

    let articles = [];
    for (const image of imgRes) {
      const title = await this.getTitle();
      const description = await this.getDescription();
      const text = await this.getText();
      const author = await faker.name.findName();
      const date = faker.date.past();
      const category = faker.random.word();
      const id = image.id;
      const imageUrl = image.download_url.replace(/[0-9/]{4,9}$/, "960/540");
      const imageUrlFull = image.download_url.replace(
        /[0-9/]{4,9}$/,
        "1600/1200"
      );
      articles.push({
        id,
        title,
        description,
        text,
        imageUrl,
        author,
        date,
        category,
        imageUrlFull
      });
    }
    return articles;
  };

  getArticle = async id => {
    const image = await this.getImage(id);
    const imageUrl = image.download_url.replace(/[0-9/]{4,9}$/, "1920/1080");
    const title = await this.getTitle();
    const description = await this.getDescription();
    const text = await this.getText();
    const author = await faker.name.findName();
    const date = faker.date.past();
    const category = faker.random.word();
    const article = {
      id,
      title,
      description,
      text,
      imageUrl,
      author,
      date,
      category
    };
    return article;
  };
}
