import { lazy } from "react";

export const Home = lazy(() => import("@features/dashboard/page/Dashboard/Home"));
export const UserProfiles = lazy(() => import("@features/profile/UserProfiles"));
export const FormElements = lazy(() => import("@features/forms/pages/FormElements"));
export const BasicTables = lazy(() => import("@features/tables/pages/BasicTables"));
export const NotFound = lazy(() => import("@app/NotFound"));