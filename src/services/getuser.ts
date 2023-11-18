import api from "../services/client.axios.api";
export const getUser = async () => {
  const rs = await api.get(`/users/me`);
  return rs.data;
};
