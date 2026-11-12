import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import ProductListing from "../pages/ProductListing"
import HooksProcess from "../pages/HooksProcess"
import Rendering from "../pages/Rendering"
import Products from "../components/Products"


const AppRoutes = () => {
  return (
    <>
    <NavBar/>
    <Routes>
     
       <Route path="/" element = {<ProductListing/>} />
       <Route path="/hooks" element = {<HooksProcess/>} />
       <Route path="/rendering" element = {<Rendering/>} />
       <Route path="/productlist/:productid" element = {<Products/>} /> 
    </Routes>
    </>
  )
}

export default AppRoutes