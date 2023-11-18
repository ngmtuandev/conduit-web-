import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../component/Login";
import Register from "../component/Register";
import HomePage from "../pages/HomePage";
import DetailArticles from "../component/DetailArticles";
import NewArticles from "../component/NewArticles";
import EditArticles from "../component/EditArticles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/article/:slug", element: <DetailArticles></DetailArticles> },
      { path: "/article/new-article", element: <NewArticles></NewArticles> },
      {
        path: "/article/edit-article/:slug",
        element: <EditArticles></EditArticles>,
      },
    ],
  },
]);

export default router;
