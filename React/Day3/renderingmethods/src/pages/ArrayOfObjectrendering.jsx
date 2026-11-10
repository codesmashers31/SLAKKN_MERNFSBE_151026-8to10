

const ArrayOfObjectrendering = () => {

     const datas = [
      
    {productName:"Iphone",price:20000},
    {productName:"HP",price:40000},
    {productName:"KeyBoad",price:10001},
    {productName:"Mouse",price:90000},
    {productName:"Monitor",price:80000}
]


 let copy = [...datas]


 const handleClick = (id)=>{

  console.log(id);
  

 }

 copy = copy.reduce((a,c)=>a+c.price,0)

  return (
    <>
    <div>
      {/* {copy.map((e,i)=>(
        <div key={i}> 
          <h3>{e.productName}</h3>
          <p>{e.price}</p>
          <button onClick={()=>handleClick(i)}>Buy Now</button>
        </div>
      ))} */}
      <h1>{copy}</h1>
    </div>
    </>
  )
}

export default ArrayOfObjectrendering