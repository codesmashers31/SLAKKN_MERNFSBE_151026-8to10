import { Route, Routes } from "react-router-dom"
import ProductList from "../pages/ProductList"
import ArrayRendering from "../pages/ArrayRendering"
import ObjectRendering from "../pages/ObjectRendering"
import ArrayOfObjectrendering from "../pages/ArrayOfObjectrendering"
import BooleanProcess from "../pages/BooleanProcess"
import NavBar from "../components/NavBar"
import ProductSingle from "../pages/ProductSingle"


const AppRoute = () => {
  return (
    <>
    <NavBar/>
    <Routes>
       <Route path="/" element={<ProductList/>} />
       <Route path="/productlist/:productid" element={<ProductSingle/>} />
       <Route path="/array" element={<ArrayRendering/>} />
       <Route path="/object" element={<ObjectRendering/>} />
       <Route path="/afo" element={<ArrayOfObjectrendering/>} />
       <Route path="/boolean" element={<BooleanProcess/>} />
    </Routes>
    </>
  )
}

export default AppRoute