import type { RouteObject } from "react-router";
import KanbanPage from "./pages/Kanban";

export const kanbanRoutes: RouteObject = {
  path: "/kanban",
  children: [{ index: true, element: <KanbanPage /> }],
};
