import {  createHashRouter } from "react-router-dom";

import Contact from "../pages/Contact";
import NewBatch from "../pages/NewBatch";
import Course from "../pages/Course";
import MainLayout from "../components/MainLayout";
import NotFound from "../components/NotFound";
import Home from "../pages/Home/Home";
import CourseDetails from "../pages/CourseDetails";
import Selections from "../pages/Results/Results";
import About from "../pages/About/About";
import Faculty from "../pages/Faculty";
import Results from "../pages/Results/Results";

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
       
      {path:"/courses/:slug",
        element:<CourseDetails/>
      },
      {
        path:"/results",
        element:<Results/>
      },
      {path:"/faculty",
        element:<Faculty/>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
