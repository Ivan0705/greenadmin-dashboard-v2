import { BrowserRouter as Router, Routes } from "react-router";
import renderRoutes from "./RenderRouters";
import { ScrollToTop } from "@/shared/ui/common";
import { routes } from "./router/routes";
import { Suspense } from "react";
import { PageLoader } from "@/shared/ui/common/PageLoader";

export default function App() {
  return (
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>{renderRoutes(routes)}</Routes>
        </Suspense>
      </Router>
  );
}
