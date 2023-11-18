import Header from "../component/Header";
import { Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Layout = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </QueryClientProvider>
  );
};

export default Layout;
