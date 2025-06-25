import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import "./index.css";
import { authRoutes } from "./app/auth/auth.router";
import { profileRoutes } from "./app/profile/profile.router";
import { kanbanRoutes } from "./app/kanban/kanban.router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  authRoutes,
  profileRoutes,
  kanbanRoutes,
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(<RouterProvider router={router} />);
