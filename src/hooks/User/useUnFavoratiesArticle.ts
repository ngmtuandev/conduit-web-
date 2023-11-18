import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUnFavoratiesArticle } from "../../services/favoritesArticle";

export const useUnFavoratiesArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (slug: string) => apiUnFavoratiesArticle(slug),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });
};
