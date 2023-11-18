import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getArticlesAPI } from "../../services/articles";
const useArticles = ({
  page,
  limit,
  tags,
}: {
  page: number;
  limit: number;
  tags: string[];
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["articles", { page, limit, tags }],
    queryFn: () => getArticlesAPI({ page, limit, tags }),
  });
  console.log(data);
  return {
    articles: data?.articles,
    isLoadingArticles: isLoading,
    metadata: data?.metadata,
  };
};

export default useArticles;
