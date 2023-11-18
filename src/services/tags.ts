import api from "../services/client.axios.api";

export const getTagsAPI = async () => {
  const rs = await api.get("/tags");
  return rs.data;
};
