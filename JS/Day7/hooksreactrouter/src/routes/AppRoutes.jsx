import { Route, Routes } from "react-router-dom"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Register from "../pages/Register"

import Home from "../pages/Home"
import Login from "../pages/Login"
import AuthLayout from "../layout/AuthLayout"
import HooksProcess from "../pages/HooksProcess"
import ProductsList from "../pages/ProductsList"
import ProductSingle from "../pages/ProductSingle"


const AppRoutes = () => {
  return (
   
    <>
    
    <Routes>
       
       <Route element={<AuthLayout/>}>

       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/hooks" element={<HooksProcess/>} />
       <Route path="/product" element={<ProductsList/>}/>
       <Route path="/productsingle/:productid" element={<ProductSingle/>} />
       </Route>
       



       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>} />


    </Routes>
    </>
    

  )
}

export default AppRoutes