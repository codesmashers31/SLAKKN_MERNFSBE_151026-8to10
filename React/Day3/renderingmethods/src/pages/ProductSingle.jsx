
import { useParams } from 'react-router-dom'

const ProductSingle = () => {

     const datas = [
    {productName:"Iphone",price:20000},
    {productName:"HP",price:40000},
    {productName:"KeyBoad",price:10000},
    {productName:"Mouse",price:90000},
    {productName:"Monitor",price:80000}
]

  const {productid} = useParams()

  let data = datas.find((e,i)=>i==productid)

  return (
    <>
    <h2>{data.productName}</h2>
    <p>{data.price}</p>
    </>
  )
}

export default ProductSingle