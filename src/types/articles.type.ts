export type TArticles = {
  id: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: [string];
  favoritesCount: number;
  authorId: string;
  favorited?: boolean;
  author: {
    id: string;
    username: string;
    email: string;
  };
};
