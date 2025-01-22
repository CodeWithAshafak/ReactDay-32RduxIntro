import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './Createslice';

const App = () => {
  let c = useSelector((s)=>s.counter.value);
  let dispatch = useDispatch()
  return (
   <>
   <h1> {c} </h1>
   <button onClick={()=>dispatch(inc())}>inc</button>
   <button onClick={()=>dispatch(dec())}>dec</button>
   
   </>
  )
}

export default App