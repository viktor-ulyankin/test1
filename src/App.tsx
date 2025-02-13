import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { useFetch } from "./hooks/useFetch";
import { List } from "./List";
import { IPhotoList } from "./models";
import { ITEMS_URL } from "./constants";
import { titleFilter } from "./helpers/titleFilter";
import { Search } from "./Search";

const App: React.FC = () => {
  const { data, isLoading, errorMessage } = useFetch<IPhotoList>(ITEMS_URL);
  const [list, setList] = useState(data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredItems = search
      ? (data || []).filter(titleFilter(search))
      : data;

    setList(filteredItems);
  }, [data, search]);

  return (
    <div className={styles.root}>
      {isLoading ? (
        "Loading..."
      ) : errorMessage ? (
        <div className={styles.error}>{errorMessage}</div>
      ) : (
        <>
          <Search onDebounceChange={setSearch} />
          <List list={list || []} />
        </>
      )}
    </div>
  );
};

export default App;
