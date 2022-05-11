import React from 'react'
import Model from '../Model/Model'
import ViewAllModel from '../../ViewAllProducts/ViewAllModel/ViewAllModel'

export default function Kurti() {
    const api="http://localhost:3001/kurti"
  return (
    <div>
        <Model api={api}/>
        {/* <ViewAllModel api={api}/> */}
    </div>
  )
}
