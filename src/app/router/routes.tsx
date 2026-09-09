import { AppLayout } from "@/widgets/layout";
import {
  BasicTables,
  FormElements,
  Home,
  NotFound,
  UserProfiles,
} from "./const";

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}
export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "profile", element: <UserProfiles /> },
      { path: "form-elements", element: <FormElements /> },
      { path: "basic-tables", element: <BasicTables /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];
