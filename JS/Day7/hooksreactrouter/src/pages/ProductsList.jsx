import { useNavigate } from "react-router-dom"


const ProductsList = () => {
 
    const navigate = useNavigate()

    let datas = [{productName:"React",price:2000},{productName:"Node",price:20000},{productName:"JS",price:4000},{productName:"HTML",price:200000},{productName:"Tailwind",price:30000},{productName:"CSS",price:6000}]




    const handleBuyNow = (productid)=>{

        navigate(`/productsingle/${productid}`)

    }
  return (
    <>
    <div className="bg-gray-200 p-10 flex justify-around">
        {datas.map((e,i)=>(
            <div key={i} className="bg-white rounded p-3">
              
               <h1>{e.productName}</h1>
               <p>{e.price}</p>
               <button onClick={()=>handleBuyNow(i)} className="bg-blue-500 text-white rounded w-30 mt-2">Buy Now</button>

            </div>
        ))}
    </div>
    </>
  )
}

export default ProductsList