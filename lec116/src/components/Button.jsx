import React from 'react'
import Component1 from './Component1'
import { useContext } from 'react'
import { counterContext } from '../Context/context'

function Button() {
    const value = useContext(counterContext)
    return (  
    <div>
      <button onClick={() => value.setCount(0)} ><span><Component1/></span> Reset</button>
    </div>
  )
}

export default Button
