"use client"
import React, {useState} from 'react'

export default function Counter() {
    const[counter , setCounter] = useState(0);

    const updateCounter = () =>{
       setCounter(counter+1);
    }
 
  return (
    <div>

        <h2>Hello</h2>
        <h2>{counter}</h2>
        <button onClick={updateCounter}>Update</button>
      
    </div>
  )
}
