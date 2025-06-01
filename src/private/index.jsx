import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "../MainLayout";

const PrivateRoute = () => {
  const isAdmin = localStorage.getItem("token");

  return isAdmin ? <MainLayout /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
