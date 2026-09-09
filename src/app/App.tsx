import { BrowserRouter as Router, Routes } from "react-router";

import renderRoutes from "./RenderRouters";
import { ScrollToTop } from "@/shared/ui/common";
import { routes } from "./router/routes";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>{renderRoutes(routes)}</Routes>
      </Router>
    </>
  );
}
