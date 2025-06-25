import type { RouteObject } from "react-router";
import ProfileLayout from "./profile.layout";
import ProfilePage from "./profile.layout";

export const profileRoutes: RouteObject = {
  path: "/profile",
  element: <ProfileLayout />,
  children: [{ index: true, element: <ProfilePage /> }],
};
