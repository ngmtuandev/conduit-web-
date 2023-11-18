import { useState } from "react";
import { useUserLogin } from "../hooks/User/useAuth";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigate();
  const { mutate: $login } = useUserLogin();
  const handleIsLogin = useAuth((state) => state.setIsLogin);
  const handleDataUser = useAuth((state) => state.setDataUser);
  const handleLogin = () => {
    $login(data, {
      onSuccess: (response) => {
        console.log(response);
        handleIsLogin(true);
        handleDataUser(response);
        window.localStorage.setItem("token_user", response.token);
        navigation("/");
      },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center text-center mt-28">
      <form onSubmit={() => handleLogin}>
        <div>
          <input
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
            type="text"
            placeholder="User email"
            className="input my-4 input-bordered w-full max-w-xs"
          />
          <input
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            type="text"
            placeholder="Password"
            className="input my-4 input-bordered w-full max-w-xs"
          />
        </div>
      </form>
      <button onClick={handleLogin} className="btn w-full max-w-xs">
        Login
      </button>
    </div>
  );
};

export default Login;
