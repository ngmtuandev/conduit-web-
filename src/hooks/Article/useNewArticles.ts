import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TArticles } from "../../types/articles.type";
import { apiCreateArticle } from "../../services/createArticles";

export const useNewArticles = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TArticles) => apiCreateArticle(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });
};
