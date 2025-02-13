import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { useFetch } from "./hooks/useFetch";
import { List } from "./List";
import { Category, IPostList } from "./models";
import { ITEMS_URL } from "./constants";
import { titleFilter } from "./helpers/titleFilter";
import { Search } from "./Search";
import { CategorySelect } from "./CategorySelect";
import { categoryFilter } from "./helpers/categoryFilter";

const App: React.FC = () => {
  const { data, isLoading, errorMessage } = useFetch<IPostList>(ITEMS_URL);
  const [category, setCategory] = useState<Category | "">("");
  const [search, setSearch] = useState("");
  const [categoryFilteredList, setCategoryFilteredList] = useState(data);
  const [filteredList, setFilteredList] = useState(data);

  useEffect(() => {
    const filteredItems = category
      ? (data || []).filter(categoryFilter(category))
      : data;

    setCategoryFilteredList(filteredItems);
  }, [data, category]);

  useEffect(() => {
    const filteredItems = search
      ? (categoryFilteredList || []).filter(titleFilter(search))
      : categoryFilteredList;

    setFilteredList(filteredItems);
  }, [categoryFilteredList, search]);

  return (
    <div className={styles.root}>
      {isLoading ? (
        "Loading..."
      ) : errorMessage ? (
        <div className={styles.error}>{errorMessage}</div>
      ) : (
        <>
          <div className={styles.filters}>
            <Search onDebounceChange={setSearch} />
            <CategorySelect onChange={setCategory} />
          </div>

          <List list={filteredList || []} />
        </>
      )}
    </div>
  );
};

export default App;
