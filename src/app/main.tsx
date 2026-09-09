import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "flatpickr/dist/flatpickr.css";
import App from "./App.tsx";
import { AppWrapper } from "@shared/ui/common/PageMeta.tsx";
import { ThemeProvider } from "@providers/context/ThemeContext.tsx";
import { ErrorBoundary } from "@/providers/error-boundary/ErrorBoundary.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <AppWrapper>
          <App />
        </AppWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>,
);
