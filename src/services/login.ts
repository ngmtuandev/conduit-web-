import api from "../services/client.axios.api";

type TLogin = {
  email: string;
  password: string;
};
export const fetchLogin = async (data: TLogin) => {
  const rs = await api.post(`/users/login`, data);
  return rs.data;
};
