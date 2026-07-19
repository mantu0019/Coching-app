import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NewBatch from "../pages/NewBatch";
import Course from "../pages/Course";
import MainLayout from "../components/MainLayout";
import NotFound from "../components/NotFound";
import Result from "../pages/Result";

export const appRoute = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/newBatch",
        element: <NewBatch />,
      },
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: "/results",
        element: <Result />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
