import api from "./client.axios.api";
export const getArticleItem = async (slug: string) => {
  const rs = await api.get(`/articles/${slug}`);
  return rs.data;
};
