import { useNavigate, useParams } from "react-router-dom";
import useArticleItem from "../hooks/Article/useItemArticles";
import { useFollowUser } from "../hooks/User/useFollow";
import { useGetAuth } from "../hooks/User/useAuth";

const DetailArticles = () => {
  const { slug = "" } = useParams();
  const { article, isLoading } = useArticleItem(slug);
  const { mutate: $followUser, isLoading: loadingFollow } = useFollowUser();
  const { dataUser } = useGetAuth();
  const navigate = useNavigate();
  console.log("dataUser", dataUser);
  const isEdit = dataUser?.id === article?.author?.id;
  if (isLoading) {
    return <div className="mt-2">Loading...</div>;
  }

  const handleFollowUser = () => {
    $followUser(article?.author?.username);
  };

  const handleEditArticles = () => {
    navigate(`/article/edit-article/${article?.slug}`);
  };
  return (
    <div className="px-8 mt-4 ">
      <div>
        <div>
          <span>{article?.title}</span>
        </div>
        <div className="text-gray-50 flex my-4">
          <div className="flex items-center">
            <div className="w-[50px] h-[50px] mr-4 rounded-full bg-gray-500 border border-green-400"></div>
            <div className="flex-col">
              <p className="font-bold">{article?.author?.username}</p>
              <span className="text-[14px]">{article?.updatedAt}</span>
            </div>
          </div>
          <div className="gap-4 flex ml-10">
            <button
              onClick={isEdit ? handleEditArticles : handleFollowUser}
              className="w-[100px] h-[25px] rounded-sm bg-gray-100 text-gray-800 cursor-pointer hover:bg-opacity-95"
            >
              {isEdit ? "Edit" : "Follow"}
            </button>
            <button className="w-[100px] h-[25px] rounded-sm bg-gray-100 text-gray-800 cursor-pointer hover:bg-opacity-95">
              Favorite
            </button>
          </div>
        </div>
        <div>
          <span>{article?.body}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailArticles;
