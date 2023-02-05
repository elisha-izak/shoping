import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CategoriesList from './pages/App_CategoriesList'
import Product from './pages/App_Product'
import ProductList from './pages/App_ProductList'




function Main(props) {




  return (
    <main className='Main'>
        <Routes>
           
           <Route path='/categories' element={<CategoriesList/>} />
           <Route path='/categories/:catName' element={<ProductList addCart={props.addCart} voidCart = {props.voidCart} pruds = {props.pruds}/>} />    
           <Route path='/categories/:catname/:prudID' element={<Product addCart={props.addCart}/>} />    
        </Routes>
    </main>
  )
}

export default Main