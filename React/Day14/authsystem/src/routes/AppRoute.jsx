import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ProductedRoute from "./ProductedRoute";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<ProductedRoute><Dashboard/></ProductedRoute>} />
      </Routes>
    </>
  );
};

export default AppRoute;