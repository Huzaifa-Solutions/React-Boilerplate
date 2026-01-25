import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import ErrorPage from "../components/ErrorPage";
import FallBack from "../components/Loaders/fallBack";
import AdminLayout from "../components/AdminLayout";

// Lazy load pages
const Dashboard = lazy(() => import("../Pages/Dashboard"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<FallBack />}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },
]);
