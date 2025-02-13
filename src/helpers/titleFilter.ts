export const titleFilter =
  (search: string) =>
  ({ title }: { title: string }) =>
    title.toLowerCase().includes(search.toLowerCase());
