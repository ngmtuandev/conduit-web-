import api from "../services/client.axios.api";
import { TArticles } from "../types/articles.type";

export const apiCreateArticle = async (data: TArticles) => {
  const rs = await api.post(`/articles`, data);
  return rs.data;
};
