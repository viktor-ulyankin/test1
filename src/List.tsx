import React from "react";
import { IPostList } from "./models";
import styles from "./List.module.css";
import { Item } from "./Item";
import { FixedSizeList } from "react-window";
import AutoSizer, { Size } from "react-virtualized-auto-sizer";

type Props = {
  list: IPostList;
};

export const List: React.FC<Props> = React.memo(({ list }) => {
  return (
    <ul className={styles.list}>
      <AutoSizer>
        {({ height, width }: Size) => (
          <FixedSizeList
            height={height}
            itemCount={list.length}
            itemSize={100}
            width={width}
          >
            {({ index, style }) => {
              const { id, title, url, thumbnail, category } = list[index];

              return (
                <div key={id} style={style}>
                  <Item
                    title={title}
                    url={url}
                    thumbnail={thumbnail}
                    category={category}
                  />
                </div>
              );
            }}
          </FixedSizeList>
        )}
      </AutoSizer>
    </ul>
  );
});
