import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiEditArticle } from "../../services/editArticle";

export const useEditArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      slug,
      title,
      description,
      body,
    }: {
      slug: string;
      title: string;
      description: string;
      body: string;
    }) => {
      apiEditArticle(slug, { title, description, body });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });
};
