import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import ErrorPage from "../components/ErrorPage";
import FallBack from "../components/Loaders/fallBack";
import AdminLayout from "../components/AdminLayout";

// Lazy load pages
const Dashboard = lazy(() => import("../Pages/Dashboard"));

// Auth Pages
const AuthLayout = lazy(() => import("@/components/AuthLayout"));
const Login = lazy(() => import("@/Pages/Auth/Login"));
const Signup = lazy(() => import("@/Pages/Auth/Signup"));
const ForgotPassword = lazy(() => import("@/Pages/Auth/ForgotPassword"));
const VerifyOTP = lazy(() => import("@/Pages/Auth/VerifyOTP"));
const ChangePassword = lazy(() => import("@/Pages/Auth/ChangePassword"));
const PasswordResetSuccess = lazy(() => import("@/Pages/Auth/PasswordResetSuccess"));

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
  {
    path: "/auth",
    element: (
      <Suspense fallback={<FallBack />}>
        <AuthLayout />
      </Suspense>
    ),
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "verify-otp",
        element: <VerifyOTP />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "reset-success",
        element: <PasswordResetSuccess />,
      },
    ],
  },
]);
