import { useLocation, useNavigate, useParams } from "react-router-dom"


const Products = () => {

  const datas = [

    {productname:"KONVIO NEW",price:"₹399.00"},
    {productname:"KONVIO OLD",price:"₹599.00"},
    {productname:"KONVIO Updated ",price:"₹799.00"},
    {productname:"Heavy Duty 12",price:"₹999.00"}

]


const location = useLocation()


console.log(location);



  const navigate = useNavigate()

  const {productid} = useParams()

  let productsinlge = datas.find((e,i)=>i==productid)
 
  const back = ()=>{

    navigate(-1)

  }

  // let copy = [...datas]


  // copy = copy.find((e,i)=>i==productid)


  // console.log(copy);
  

  return (
   <>
   <div>
    <button onClick={back} className="bg-black my-3 text-white w-30 p-1 rounded-2xl ">Back</button>
   </div>
   <div>
    Product Single  {productid}

    <h2>{productsinlge.productname}</h2>
    <p>{productsinlge.price}</p>
   </div>

   <div>
    {location.state.map((e,i)=>(
       <p key={i}>{e}</p>
    ))}
   </div>
   </>
  )
}

export default Products