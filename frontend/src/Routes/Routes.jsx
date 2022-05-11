import React from 'react'
import {Routes, Route} from "react-router-dom"
import ViewAllProducts from '../components/ViewAllProducts/ViewAllProducts'
import Home from '../components/Home/Home'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/viewAllProducts" element={<ViewAllProducts/>}/>
      </Routes>
    </div>
  )
}
