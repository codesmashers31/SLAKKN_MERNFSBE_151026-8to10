import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import ArrayProcess from "../pages/ArrayProcess"
import ObjectProcess from "../pages/ObjectProcess"
import ArrayOfObjectsProcess from "../pages/ArrayOfObjectsProcess"


const AppRoutes = () => {
  return (
    <>
     <NavBar/>
     <Routes>
        <Route path="/" element={<ArrayProcess/>} />
        <Route path="/obj" element={<ObjectProcess/>} />
        <Route path="/arrobj" element={<ArrayOfObjectsProcess/>} />
     </Routes>
    </>
  )
}

export default AppRoutes