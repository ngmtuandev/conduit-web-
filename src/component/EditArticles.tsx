import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useArticleItem from "../hooks/Article/useItemArticles";
import { useEditArticle } from "../hooks/Article/useEditArticle";
type TArticlesNew = {
  title: string;
  description: string;
  body: string;
};
const EditArticles = () => {
  const [data, setData] = useState<TArticlesNew>({
    title: "",
    description: "",
    body: "",
  });
  const { slug } = useParams();
  const navigate = useNavigate();
  const { mutate: $editArticles } = useEditArticle();
  const { article } = useArticleItem(slug!);

  useEffect(() => {
    setData({
      title: article?.title,
      description: article?.description,
      body: article?.body,
    });
  }, [article]);

  const handleEditArticles = () => {
    $editArticles(
      { slug, ...data },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  };

  return (
    <div>
      <div className="flex-col text-center justify-center items-center">
        <div className="flex-col mt-20">
          <form>
            <div>
              <input
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                placeholder="Title Articles"
                className="w-[350px] h-[40px] bg-white rounded-sm px-2 my-2"
              ></input>
            </div>
            <div>
              <input
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                placeholder="Descript Articles"
                className="w-[350px] h-[40px] bg-white rounded-sm px-2 my-2"
              ></input>
            </div>
            <div>
              <textarea
                value={data.body}
                onChange={(e) => setData({ ...data, body: e.target.value })}
                placeholder="Body Articles"
                className="w-[350px] h-[80px] bg-white rounded-sm px-2 my-2"
              ></textarea>
            </div>
          </form>
          <button
            onClick={handleEditArticles}
            className="w-[200px] h-[40px] bg-cyan-800 text-gray-50 rounded-sm hover:bg-opacity-90"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditArticles;
