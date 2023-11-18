import { apiFavoratiesArticle } from "../../services/favoritesArticle";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useFavoratiesArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (slug: string) => apiFavoratiesArticle(slug),
    onSuccess: () => {
      // first run ...
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });
};
