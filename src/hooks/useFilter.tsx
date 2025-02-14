import { useState, useEffect } from "react";
import { Category, IPostList } from "../models";
import { categoryFilter } from "../helpers/categoryFilter";
import { titleFilter } from "../helpers/titleFilter";

// In case there is a real big data, needs to optimise calculating.
// For example, using makrotasks (setTimeout), separate calculation,
// don't forget to use lome loader in UI.
export const useFilter = (
  data: IPostList | null,
  category: Category | "",
  title: string
) => {
  const [categoryFilteredList, setCategoryFilteredList] = useState(data);
  const [titleFilteredList, setTitleFilteredList] = useState(data);

  useEffect(() => {
    const filteredItems = category
      ? (data || []).filter(categoryFilter(category))
      : data;

    setCategoryFilteredList(filteredItems);
  }, [data, category]);

  useEffect(() => {
    const filteredItems = title
      ? (categoryFilteredList || []).filter(titleFilter(title))
      : categoryFilteredList;

    setTitleFilteredList(filteredItems);
  }, [categoryFilteredList, title]);

  return titleFilteredList;
};
