import React from 'react'
import Model from '../Model/Model'

export default function Shirt() {
    const api=" http://localhost:3001/shirts"
  return (
    <div>
        <Model api={api}/>
    </div>
  )
}
