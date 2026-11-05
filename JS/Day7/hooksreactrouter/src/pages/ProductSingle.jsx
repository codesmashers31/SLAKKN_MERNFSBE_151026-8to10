import { useParams } from "react-router-dom"


const ProductSingle = () => {

    const {productid} = useParams()

    //console.log(productid);

      let datas = [{productName:"React",price:2000},{productName:"Node",price:20000},{productName:"JS",price:4000},{productName:"HTML",price:200000},{productName:"Tailwind",price:30000},{productName:"CSS",price:6000}]


      const datastake =  datas.find((e,i)=>i==productid)

      console.log(datastake);
      
    
  return (
    <>
    <h1>{datastake.productName}</h1>
    <p>{datastake.price}</p>
    </>
  )
}

export default ProductSingle