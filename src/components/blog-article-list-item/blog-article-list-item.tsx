import React, {ReactText} from "react";
import Link from "next/link";
import LazyImage from "../lazy-image";
import months from "../../helpers/months";
import "./blog-article-list-item.scss";
import { IArticle } from "../../interfaces";

const BlogArticleListItem: React.FC<IArticle> = ({
  title,
  id,
  description,
  date,
  imageUrl
}) => {
  const fixedDate: Date = new Date(date);
  const day: number = fixedDate.getDay();
  const dayText: ReactText = day < 10 ? `0${day}` : day;
  const month: string = months[fixedDate.getMonth()];
  const year: number = fixedDate.getFullYear();
  return (
    <div className="blog-item">
      <Link href={`/article/${id}`} prefetch={false}>
        <a>
          <div className="image-wrapper">
            <LazyImage src={imageUrl} alt="Article image" />
          </div>

          <h2 className="title">{title}</h2>
        </a>
      </Link>

      <span className="date">{`${dayText} - ${month} - ${year}`}</span>
      <p className="description">{description}</p>
    </div>
  );
};

export default BlogArticleListItem;
