import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import Boolean from "../pages/Boolean"
import Nullish from "../pages/Nullish"
import Practice from "../pages/Practice"
import ArrayProcess from "../pages/ArrayProcess"


const AppRoute = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Boolean/>}  />
        <Route path="/null" element={<Nullish/>}  />
        <Route path="/practice" element={<Practice/>}  />
        <Route path="/array" element={<ArrayProcess/>}  />
    </Routes>
    </>
  )
}

export default AppRoute