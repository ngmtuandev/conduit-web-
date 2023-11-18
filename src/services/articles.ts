import api from "../services/client.axios.api";
export const getArticlesAPI = async (params: {
  limit: number;
  page: number;
  tags: string[];
}) => {
  const rs = await api.get("/articles", {
    params: {
      limit: params.limit,
      page: params.page,
      "tags[]": params.tags, // tags[]='name_tag'&tags[]='name_tag' <=> "tags[]" : ['name_tag', 'name_tag',...]
    },
  });
  return rs.data;
};
