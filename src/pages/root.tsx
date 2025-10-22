import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export const Root = () => {
  return (
    <div className="min-h-screen bg-light-gray">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};
