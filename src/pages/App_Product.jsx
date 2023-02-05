import { useState } from "react";
import { useParams,Link } from "react-router-dom"

function Product(props) {
const {prudID} = useParams()

const [prud, setPrud] = useState()

fetch('https://fakestoreapi.com/products/' + prudID)
.then(res=>res.json())
.then(catJ=> setPrud(catJ))

  return (
    <div>
      {prud?<> <Link to={"/categories/" + prud.category}><h3>{prud.category}</h3></Link>
       <img src={prud.image} />
      <span><h3>{prud.title}</h3></span>
      <p><h3>${prud.price}</h3></p>
      <button onClick={()=> props.addCart(prud.id)}>{'add to cart'}</button>
      <br />
      <span>{prud.description}</span></>: 'loading....'}
    </div>
  )
}

export default Product