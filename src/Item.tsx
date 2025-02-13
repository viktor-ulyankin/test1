import React from "react";
import styles from "./Item.module.css";

type Props = {
  title: string;
  url: string;
  thumbnail: string;
  category: string;
};

export const Item: React.FC<Props> = ({ title, url, thumbnail, category }) => {
  return (
    <li className={styles.root}>
      <a href={url} className={styles.imageLink}>
        <img src={thumbnail} className={styles.image} alt={title} />
      </a>

      <span className={styles.category}>{category}</span>
      <span className={styles.title}>{title}</span>
    </li>
  );
};
