import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFollowUser, apiUnFollowUser } from "../../services/followUser";

export const useFollowUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (username: string) => apiFollowUser(username),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });
};

export const useUnFollowUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (username: string) => apiUnFollowUser(username),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });
};
