import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth);

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
