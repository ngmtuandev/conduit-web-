import { useQuery } from "@tanstack/react-query";
import { getArticleItem } from "../../services/article";
const useArticleItem = (slug: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["article"],
    queryFn: () => getArticleItem(slug),
  });
  return {
    article: data,
    isLoading,
  };
};

export default useArticleItem;
