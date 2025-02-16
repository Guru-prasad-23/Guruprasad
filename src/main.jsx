import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Spinner from "./components/Spinner.jsx";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About.jsx"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails.jsx"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage.jsx"));
const Blogs = lazy(() => import("./pages/Blogs.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Suspense fallback={<Spinner />}>{<App />}</Suspense>}
      >
        <Route index path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
      </Route>
    </>
  )
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
