import api from "../services/client.axios.api";
import { TArticles } from "../types/articles.type";

export const apiEditArticle = async (
  slug: string,
  data: { title: string; description: string; body: string }
) => {
  const rs = await api.patch(`/articles/${slug}`, data);
  return rs.data;
};
