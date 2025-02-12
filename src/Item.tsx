import React from "react";
import styles from "./Item.module.css";

type Props = {
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const Item: React.FC<Props> = ({
  albumId,
  title,
  url,
  thumbnailUrl,
}) => {
  return (
    <li className={styles.root}>
      <a href={url} className={styles.imageLink}>
        <img src={thumbnailUrl} className={styles.image} />
      </a>

      <span className={styles.album}>{`Album ${albumId}`}</span>
      <span className={styles.title}>{title}</span>
    </li>
  );
};
