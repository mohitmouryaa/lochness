import { memo, Suspense } from "react";
import ErrorBoundary from "@/pages/error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

export default memo(function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="m-auto">Loading...</div>}>
        <Router>
          <AppRoutes />
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
});
