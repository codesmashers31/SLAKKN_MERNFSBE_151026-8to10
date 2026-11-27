import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext'

const Cards = () => {

 const {count,handleClick} = useContext(CounterContext)

  return (
    <div>
      <div>
        <p>{count}</p>
        <p>Product name</p>
        <h1>Product price</h1>
        <button onClick={handleClick}>add to cards</button>
      </div>
    </div>
  )
}

export default Cards
