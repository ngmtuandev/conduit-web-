import api from "../services/client.axios.api";

export const apiUnFollowUser = async (usename: string) => {
  const rs = await api.delete(`/profiles/${usename}/follow`);
  return rs.data;
};

export const apiFollowUser = async (usename: string) => {
  const rs = await api.post(`/profiles/${usename}/follow`);
  return rs.data;
};
