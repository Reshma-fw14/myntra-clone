import React from 'react'
import Model from '../Model/Model'

export default function GirlDresses() {
    const api=" http://localhost:3001/girlsdresses"
  return (
    <div>
        <Model api={api}/>
    </div>
  )
}