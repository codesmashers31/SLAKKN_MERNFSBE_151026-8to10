import { useLocation } from "react-router-dom"


const Login = () => {

  const location = useLocation()


  console.log(location);
  

  return (
    <>
    <div>
        <form>
           <h1>{location.state.username}</h1>
            <input type="text" placeholder="Enter the Email" />
            <input type="text" placeholder="Enter the password" />
            <button>Login</button>
        </form>
    </div>
    </>
  )
}

export default Login