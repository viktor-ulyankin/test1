import React from "react";
import { IPhotoList } from "./models";
import styles from "./List.module.css";
import { Item } from "./Item";

type Props = {
  list: IPhotoList;
};

export const List: React.FC<Props> = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map(({ albumId, id, title, url, thumbnailUrl }) => (
        <Item
          key={id}
          albumId={albumId}
          title={title}
          url={url}
          thumbnailUrl={thumbnailUrl}
        />
      ))}
    </ul>
  );
};
