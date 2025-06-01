import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "../MainLayout";

const PrivateRoute = () => {
  console.log("token:", localStorage.getItem("otabek"));

  const isAdmin = localStorage.getItem("otabek");

  return isAdmin ? <MainLayout /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
