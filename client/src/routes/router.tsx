import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { ProtectedRoute } from "./ProtectedRoute";
import { AppRouteErrorBoundary } from "@/components/AppErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <div />
      </ProtectedRoute>
    ), // Replace <div /> with your dashboard or landing page later
    errorElement: <AppRouteErrorBoundary />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <AppRouteErrorBoundary />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <AppRouteErrorBoundary />,
  },
]);
