import React, { useState } from 'react'



export default function Counter() {
  let [count,setCount]=useState(0);
    let increment=()=>{
        setCount(count+1);
    }
    let decrement=()=>{
      setCount(count-1);
  }
  return (
    <div>
      <button type="button" className="btn btn-primary my-3" onClick={increment}>Increament</button>
        <button type="button" className="btn btn-danger my-3 mx-3" onClick={decrement}>Decreament</button>
        <h2 className='my-10'>{count}</h2>
    </div>
  )
}
