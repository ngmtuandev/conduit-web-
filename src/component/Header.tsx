import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useGetAuth } from "../hooks/User/useAuth";
const Header = () => {
  const isLogin = useAuth((state) => state.isLogin);
  const { dataUser } = useAuth();
  useGetAuth();

  return (
    <div className="w-[100%] h-[60px] bg-gray-800 flex items-center justify-between px-6">
      <div className="text-[26px] text-gray-200 font-bold">Conduit</div>
      <div className="flex justify-center items-center">
        <Link
          to={"/"}
          className="cursor-pointer hover:text-gray-400 text-gray-200 font-medium text-[16px] ml-4"
        >
          Home
        </Link>
        <Link
          to={"/article/new-article"}
          className="cursor-pointer hover:text-gray-400 text-gray-200 font-medium text-[16px] ml-4"
        >
          New Article
        </Link>
        {!isLogin ? (
          <div className="flex items-center">
            <Link
              to={"/login"}
              className="cursor-pointer hover:text-gray-400 text-gray-200 font-medium text-[16px] ml-4"
            >
              Sign in
            </Link>
            <Link
              to={"/register"}
              className="cursor-pointer hover:text-gray-400 text-gray-200 font-medium text-[16px] ml-4"
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div className="ml-4">Hi, {dataUser?.email}</div>
        )}
      </div>
    </div>
  );
};

export default Header;
