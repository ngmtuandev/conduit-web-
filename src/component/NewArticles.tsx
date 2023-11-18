import { useNewArticles } from "../hooks/Article/useNewArticles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
type TArticlesNew = {
  title: string;
  description: string;
  body: string;
};

const NewArticles = () => {
  const [data, setData] = useState<TArticlesNew>({
    title: "",
    description: "",
    body: "",
  });
  const navigate = useNavigate();
  const { mutate: $createArticles, isLoading } = useNewArticles();
  const handleCreateArticles = () => {
    $createArticles(data, {
      onSuccess: () => {
        alert("tạo bài viết thành công");
        setData({
          title: "",
          description: "",
          body: "",
        });
        navigate("/");
      },
    });
  };
  return (
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
          className="w-[200px] h-[40px] bg-cyan-800 text-gray-50 rounded-sm hover:bg-opacity-90"
          onClick={handleCreateArticles}
        >
          {isLoading ? "..." : "Create Articles"}
        </button>
      </div>
    </div>
  );
};

export default NewArticles;
