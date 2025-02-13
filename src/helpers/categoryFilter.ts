import { Category } from "../models";

export const categoryFilter =
  (search: Category) =>
  ({ category }: { category: Category }) =>
    category.toLowerCase().includes(search.toLowerCase());
