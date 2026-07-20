import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
 
import SmoothScroll from "./components/SmoothScrolling.jsx";
import { RouterProvider } from "react-router-dom"; 
import { appRoute } from "./routes/AppRoute.jsx";

createRoot(document.getElementById("root")).render(
  <SmoothScroll>
    <RouterProvider router={appRoute}>
     
    </RouterProvider>
    
  </SmoothScroll>
);
