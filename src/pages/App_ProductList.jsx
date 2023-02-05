import { useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../App_ProductCard"


function ProductList(props) {
  const [cat, setCat] = useState('')
  const {catName} = useParams()
 
  fetch('https://fakestoreapi.com/products/category/' + catName)
            .then(res=>res.json())
            .then(catJ=> setCat(catJ))
  

  return (
    <div>
      <h3>{catName}</h3>
      {cat? cat.map(v=> <ProductCard prud={v} addCart={props.addCart} voidCart = {props.voidCart}  pruds = {props.pruds}/>): 'loading'}
    </div>
  )
}

export default ProductList