import api from "../services/client.axios.api";
export const apiFavoratiesArticle = async (slug: string) => {
  const rs = await api.post(`/articles/${slug}/favorite`);
  return rs.data;
};

export const apiUnFavoratiesArticle = async (slug: string) => {
  const rs = await api.delete(`/articles/${slug}/favorite`);
  return rs.data;
};
