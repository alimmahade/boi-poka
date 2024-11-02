import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import DashBoard from "./DashBoard";
import BookDetails from "../BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "books/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/public/data/booksData.json"),
      },
      { path: "/dashboard", element: <DashBoard /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
