import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home } from '../Page/Home'
import { Login } from '../Page/Login'
import { Payments } from '../Page/Payments'
import { Products } from '../Page/Products'
import { Register } from '../Page/Register'
import { NotFound } from '../Page/NotFound'
import { SingleProduct } from '../Page/SingleProduct'
import { Cart } from '../Page/Cart'
import { Admin } from '../Page/Admin'
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/payments' element={<Payments/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<NotFound/>} />
            <Route path='/products/:id' element={<SingleProduct/>} />
            <Route path='/admin' element={<Admin/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </div>
  )
}
