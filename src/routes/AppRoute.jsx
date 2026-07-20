import {  createHashRouter } from "react-router-dom";
 import About from "../pages/About";
import Contact from "../pages/Contact";
import NewBatch from "../pages/NewBatch";
import Course from "../pages/Course";
import MainLayout from "../components/MainLayout";
import NotFound from "../components/NotFound";
import Result from "../pages/Result";
import Home from "../pages/Home/Home";
import CourseDetails from "../pages/CourseDetails";

export const appRoute = createHashRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
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
        path: "/courses",
        element: <Course />,
      },
      {
        path: "/results",
        element: <Result />,
      },
      {path:"/courses/:slug",
        element:<CourseDetails/>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
