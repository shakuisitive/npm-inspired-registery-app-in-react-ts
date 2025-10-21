import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export const Root = () => {
  return (
    <div className="container mx-auto p-20">
      <Header />
      <Outlet />
    </div>
  );
};
