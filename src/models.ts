export enum Category {
  LOREM = "lorem",
  JSONPLACEHOLDER = "jsonplaceholder",
  IPSUM = "ipsum",
  RUTRUM = "rutrum",
  ELEMENTUM = "elementum",
}

export type IPost = {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
  category: Category;
};

export type IPostList = IPost[];
