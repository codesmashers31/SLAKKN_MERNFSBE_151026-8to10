

const Link = () => {
  return (
    <>
    <div className="flex gap-15 items-center">
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">About</a>
        <a href="">Contact</a>
    </div>
    <div>
        <LoginButton/>
    </div>
    </>
  )
}

export default Link


const LoginButton = ()=>{
    return (<>
    <button className="bg-orange-500 p-1 text-white rounded w-30 font-bold">Login</button>
    </>)
}