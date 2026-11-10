import { useNavigate } from "react-router-dom"


const ProductList = () => {

 const navigate = useNavigate()

 const datas = [
    {productName:"Iphone",price:20000},
    {productName:"HP",price:40000},
    {productName:"KeyBoad",price:10000},
    {productName:"Mouse",price:90000},
    {productName:"Monitor",price:80000}
]


const buyNow = (productid)=>{

    navigate(`/productlist/${productid}`)

}



  return (
    <>
    <div className="bg-amber-100 flex justify-evenly items-center h-100">
        {datas.map((e,i)=>(
            <div key={i} className="bg-white  w-50 h-50 rounded-2xl p-4 flex flex-col gap-10">
                 <h2>{e.productName}</h2>
                 <p>{e.price}</p>
                 <button onClick={()=>buyNow(i)} className="bg-black text-white text-center p-1 rounded">Buy Now</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default ProductList