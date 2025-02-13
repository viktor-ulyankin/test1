import React from "react";
import { IPhotoList } from "./models";
import styles from "./List.module.css";
import { Item } from "./Item";
import { FixedSizeList } from "react-window";
import AutoSizer, { Size } from "react-virtualized-auto-sizer";

type Props = {
  list: IPhotoList;
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
              const { albumId, id, title, url, thumbnailUrl } = list[index];

              return (
                <div key={id} style={style}>
                  <Item
                    albumId={albumId}
                    title={title}
                    url={url}
                    thumbnailUrl={thumbnailUrl}
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
