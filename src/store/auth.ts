import { create } from "zustand";

type TUser = {
  bio: string;
  createdAt: string;
  email: string;
  id: string;
  image: string;
  updatedAt: string;
  username: string;
};

type TAuth = {
  isLogin: boolean;
  dataUser: TUser;
  setIsLogin: (isLogin: boolean) => void;
  setDataUser: (data: TUser) => void;
};

export const useAuth = create<TAuth>((set) => ({
  dataUser: {
    bio: "",
    createdAt: "",
    email: "",
    id: "",
    image: "",
    updatedAt: "",
    username: "",
  },
  isLogin: !!localStorage.getItem("token_user"),
  setIsLogin: (isLogin: boolean) => set({ isLogin }),
  setDataUser: (data: TUser) => set({ dataUser: data }),
}));
