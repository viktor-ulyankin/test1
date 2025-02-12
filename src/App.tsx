import React from "react";
import styles from "./App.module.css";
import { useFetch } from "./hooks/useFetch";
import { List } from "./List";
import { IPhotoList } from "./models";
import { ITEMS_URL } from "./constants";

const App: React.FC = () => {
  const { data, isLoading, errorMessage } = useFetch<IPhotoList>(ITEMS_URL);

  return (
    <div className={styles.root}>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}

      {isLoading ? "Loading..." : <List list={data ?? []} />}
    </div>
  );
};

export default App;
