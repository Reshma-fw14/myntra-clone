import React from 'react'
import { Route, Routes } from "react-router-dom";
import Landing from '../Landing/Landing';
import Products from '../Products/Products';
import WomenModel from '../MainModel/Model';
import ViewItem from '../ViewItem/ViewItem';
import Cart from '../CartItems/Cart';
import Signup from '../Registration/Signup';
import Login from '../Registration/Login';

export default function AllRoutes() {
  return (
    <div>
        <Routes>
           <Route path="/myntra-clone" element={<Landing/>} />
           <Route path='/cart/:id' element={<Cart/>}/>
           <Route path="/products/:routeName" element={<Products />} />
           <Route path="/allProducts/:gender" element={<WomenModel/>}/>
           <Route path="/ProductView/:SingleItem" element={<ViewItem/>}/>
           <Route path='/user/signup' element={<Signup/>}/>
           <Route path='/user/login' element={<Login/>} />
        </Routes>
    </div>
  )
}
