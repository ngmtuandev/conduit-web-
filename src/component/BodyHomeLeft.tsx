import { useNavigate } from "react-router-dom";
import useArticles from "../hooks/Article/useArticles";
import { TArticles } from "../types/articles.type";
import ArticlesItem from "./ArticlesItem";
import { Spinner } from "@material-tailwind/react";
import Pagination from "./Pagination";
import { useCallback, useState } from "react";
import { useTagStore } from "../store/tags";
const BodyHomeLeft = () => {
  const [page, setPage] = useState(1);
  const tagSeleted = useTagStore((state) => state.selectTag);
  const { articles, isLoadingArticles, metadata } = useArticles({
    page,
    limit: 2,
    tags: tagSeleted,
  });

  const navigation = useNavigate();

  const handlePage = useCallback(
    (cur: number) => {
      setPage(cur);
    },
    [page]
  );

  return (
    <div className="text-[10px] flex-col justify-center items-center h-screen">
      <div className="my-2">
        <div className="w-[100px] flex justify-center items-center text-gray-100 font-semibold text-[14px] border-b-[2px] border-gray-200">
          Global Feed
        </div>
        <div></div>
      </div>
      {isLoadingArticles ? (
        <div className="mt-5 ml-5">
          <Spinner className="h-12 w-12" />
        </div>
      ) : (
        <div>
          {articles &&
            articles?.map((item: TArticles) => {
              return (
                <div
                  onClick={() => navigation(`/article/${item?.slug}`)}
                  key={item.id}
                >
                  <ArticlesItem data={item}></ArticlesItem>
                </div>
              );
            })}
          <Pagination
            page={page}
            onPage={handlePage}
            total={Math.ceil(metadata.total / 2)}
          ></Pagination>
        </div>
      )}
    </div>
  );
};

export default BodyHomeLeft;
