import { useEffect, useState } from "react";

const SearchTheProduct = () => {

    const [showDatas,setShowDatas] = useState([])
    const [search,setSearch] = useState("")
    const [category,setCategory] = useState("")

 const fetchTheProduct = async () => {

    

    try {
        const res = await fetch("https://dummyjson.com/products")
        const change = await res.json()
        console.log(change.products);
        setShowDatas(change.products)
        
    } catch (error) {

        console.log(error);
        
        
    }
    
 }

 const handleChange = (e) => {

  setSearch(e.target.value)
   
 };

 let searchProduct = [...showDatas]

 if(search){

    searchProduct = searchProduct.filter((e,i)=>e.title.toLowerCase().includes(search.toLowerCase()))
    //console.log(searchProduct);
    
 }


 const DuplicateRemove =   [...new Set(showDatas.map((e)=>e.category))]           

//  console.log(DuplicateRemove);
 
const handleCat = (e) => {

    setCategory(e.target.value)
  
};


if(category){
    searchProduct = searchProduct.filter((e)=>e.category === category)
}


useEffect(()=>{
    fetchTheProduct()
},[])
  return (
    <>
      <div>
        <div>
            <input type="text" placeholder="Search by name..." onChange={handleChange} />
            <select onChange={handleCat}>
                <option value="">Select One..</option>
                 {DuplicateRemove.map((e)=>(
                    <option value={e}>{e}</option>
                 ))}
            </select>
        
        </div>
        {searchProduct.length === 0?(<p>No datas Found</p>):(searchProduct.map((e,i)=>(
            <div>
                <h3>{e.title}</h3>
                <p>{e.category}</p>
                <p>{e.price}</p>
            </div>
        )))}
      </div>
    </>
  );
};

export default SearchTheProduct;








// const arr = [{name:"React"},{name:"Node"}]

// let serach = "React"

// let copy = [...arr]


// copy = copy.filter((e)=>e.name.toLowerCase().includes(serach.toLowerCase()))


// console.log(copy);
