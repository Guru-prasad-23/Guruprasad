import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ProjectDetails from "./components/ProjectDetails.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<Home/>}/>
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
