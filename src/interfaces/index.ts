export interface IArticle {
  author: string;
  category: string;
  date: string;
  description: string;
  id: string;
  imageUrl: string;
  text: string;
  title: string;
}

export interface IBlogService {
  getArticles(step?: number): Promise<IArticle[]>;
  getArticle(id: string): Promise<IArticle>;
}

