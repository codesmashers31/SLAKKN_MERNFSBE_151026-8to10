import { useEffect, useState } from "react";
import Scaleton from "./components/Scaleton";

const App = () => {
 
const [showDatas,setShowDatas] = useState([])
const [loading,setLoading] = useState(true)
const [sort,setSort] = useState("")
const [search,setSearch] = useState("")
const [cat,setCat] = useState("")

  const fetchProduct = async() => {

    

    try {
      const res = await fetch("https://dummyjson.com/products?limit=6");
      const getDatas = await res.json()
      setShowDatas(getDatas.products)
      setTimeout(()=>{
        setLoading(false)
      },1000)
      
    } catch (error) {

      console.log('Error',error);
      
      
    }
    
  }; 


  useEffect(()=>{
    fetchProduct()
  },[])

    let copy = [...showDatas]

  const handleChange = (e)=>{

    setSort(e.target.value)

  }



  if(sort==="high") {
     
    
   
   copy =  copy.sort((a,b)=>a.price-b.price)

   console.log(copy);
   


  }
   if(sort==="low") {
   

    copy = copy.sort((a,b)=>b.price-a.price)

    console.log(copy);
   
  }

  const handleSearch = (e) => {

    setSearch(e.target.value)
    
  };

  if(search){
    copy = copy.filter((e,i)=>e.title.toLowerCase().includes(search.toLowerCase()))
  }


  const duplicateremove = [...new Set(showDatas.map((e,i)=>e.category))] 

  //console.log(duplicateremove);

  const handleCat = (e)=>{

    setCat(e.target.value)

  }
  
  if(cat){
    copy = copy.filter((e,i)=>e.category==cat)
  }

  const handlePrice = (pricebyten)=>{

   copy = copy.filter((e,i)=>Number(e.price)>pricebyten)
   setShowDatas(copy)
   
   
  }

const handleTotal = ()=>{

  let copys = [...showDatas]

  copys.reduce((a,c)=>{a+c.price},0)

  console.log(copys);
  

}

  return (
    <>
    <div>
      <select onChange={handleChange}>
        <option value="">Select One..</option>
        <option value="high">Low to High</option>
        <option value="low">High to Low</option>
      </select>
      <button onClick={()=>handlePrice(10)}>Above 10</button>
      <select onChange={handleCat}>
        <option value="">Select One..</option>
        {duplicateremove.map((e,i)=>(
          <option value={e}>{e}</option>
        ))}
      </select>
      <input type="text" placeholder="Serach by name.." onChange={handleSearch} />
    </div>
      <div className="flex gap-20 p-10 justify-center flex-wrap">
        {loading?<Scaleton/>:copy.length===0?<p>No Datas Found</p>:copy.map((e,i)=>(

          <div className="w-72  rounded-lg  border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800" key={i}>
      {/* Product Image Placeholder */}
      <div className="mb-4 h-44 w-full rounded-md ">
        <img src={e.images} alt={e.image} />
      </div>

      {/* Category / Badge Placeholder */}
      <div className="mb-2 h-3 w-1/4 rounded ">{e.category}</div>

      {/* Product Title Placeholder */}
      <div className="mb-2 h-20 w-3/4 rounded ">{e.title}</div>

      {/* Description Lines Placeholder */}
      {/* <div className="mb-4 space-y-2">
        <div className="h-3 w-full rounded "></div>
        <div className="h-3 w-5/6 rounded "></div>
      </div> */}

      {/* Price & Button Placeholder */}
      <div className="flex items-center justify-between pt-2">
        <div className="h-6 w-16 rounded ">{e.price}</div>
        <div className="h-9 w-24 rounded-md "><button>Add to Cart</button></div>
      </div>
    </div>

        ))}
      </div>
    </>
  );
};

export default App;