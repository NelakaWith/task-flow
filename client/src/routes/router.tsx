import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <div />
      </ProtectedRoute>
    ), // Replace <div /> with your dashboard or landing page later
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);
