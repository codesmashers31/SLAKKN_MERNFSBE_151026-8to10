
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Todo from '../pages/Todo'

const AppRoute = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Todo/>} />
      </Routes>
    </div>
  )
}

export default AppRoute
