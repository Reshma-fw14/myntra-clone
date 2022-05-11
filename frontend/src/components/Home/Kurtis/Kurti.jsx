import React from 'react'
import Model from '../Model/Model'

export default function Kurti() {
    const api=" http://localhost:3001/kurti"
  return (
    <div>
        <Model api={api}/>
    </div>
  )
}
