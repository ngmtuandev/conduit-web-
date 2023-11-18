import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchLogin } from "../../services/login";
import { getUser } from "../../services/getuser";
import { useAuth } from "../../store/auth";

export const useUserLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      fetchLogin({ email, password }),
  });
};

export const useGetAuth = () => {
  const { isLogin } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: () => getUser(),
    enabled: isLogin,
  });
  return {
    dataUser: data,
    isLoading,
  };
};
