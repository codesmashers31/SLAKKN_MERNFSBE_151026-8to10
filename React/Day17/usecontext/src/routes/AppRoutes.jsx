import { Route, Routes } from "react-router-dom";
import Counter from "../components/Counter";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

const AppRoutes = () => {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Counter/>} />
        <Route path="/cards" element={<Cards/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;