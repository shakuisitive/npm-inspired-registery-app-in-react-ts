import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./pages/root";

import { Homepage } from "./pages/home-page.tsx";
import { SearchPage } from "./pages/search/search-page.tsx";
import { DetailsPage } from "./pages/details/details-page.tsx";
import { searchLoader } from "./pages/search/search-loader.ts";
import { detailsLoader } from "./pages/details/details-loader.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        path: "/packages/:name",
        element: <DetailsPage />,
        loader: detailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
