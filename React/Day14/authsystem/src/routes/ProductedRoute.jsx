
import { Navigate } from "react-router-dom";

const ProductedRoute = ({children}) => {

    const getDatas = JSON.parse(localStorage.getItem("isActive"))
    if(!getDatas){
      
      return <Navigate to={"/"}/>

    }

    return children
 


};

export default ProductedRoute;