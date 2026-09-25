import { lazy } from "react";

export const Home = lazy(() => import("@/pages/Dashboard/pages/Home"));
export const UserProfiles = lazy(() => import("@/pages/UserProfiles/pages/UserProfiles"));
export const FormElements = lazy(() => import("@/pages/FormElements/pages/FormElements"));
export const BasicTables = lazy(() => import("@/pages/Tables/pages/BasicTables"));
export const NotFound = lazy(() => import("@app/NotFound"));