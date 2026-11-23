const Scaleton = () => {
  return (<>
       
       <div className="flex gap-20 p-10 justify-center">
        {[1,2,3].map((e,i)=>(<div key={i} className="w-72 animate-pulse rounded-lg  border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      {/* Product Image Placeholder */}
      <div className="mb-4 h-44 w-full rounded-md bg-gray-300 dark:bg-gray-700"></div>

      {/* Category / Badge Placeholder */}
      <div className="mb-2 h-3 w-1/4 rounded bg-gray-300 dark:bg-gray-700"></div>

      {/* Product Title Placeholder */}
      <div className="mb-2 h-5 w-3/4 rounded bg-gray-300 dark:bg-gray-700"></div>

      {/* Description Lines Placeholder */}
      <div className="mb-4 space-y-2">
        <div className="h-3 w-full rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-3 w-5/6 rounded bg-gray-300 dark:bg-gray-700"></div>
      </div>

      {/* Price & Button Placeholder */}
      <div className="flex items-center justify-between pt-2">
        <div className="h-6 w-16 rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-9 w-24 rounded-md bg-gray-300 dark:bg-gray-700"></div>
      </div>
    </div>))}
       </div>

  </>)
};

export default Scaleton;