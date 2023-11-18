import { useEffect } from "react";
import BodyHome from "../component/BodyHome";
import BottomHeader from "../component/BottomHeader";
import { useGetAuth } from "../hooks/User/useAuth";
import { useAuth } from "../store/auth";

const HomePage = () => {
  useGetAuth();
  const { dataUser } = useGetAuth();
  const { setDataUser, dataUser: user } = useAuth();
  console.log(dataUser);
  useEffect(() => {
    if (dataUser) {
      setDataUser(dataUser);
    }
    console.log("dataUser", user);
  }, [dataUser]);
  return (
    <div>
      <BottomHeader></BottomHeader>
      <BodyHome></BodyHome>
    </div>
  );
};

export default HomePage;
