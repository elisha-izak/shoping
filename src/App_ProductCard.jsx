import { Link} from "react-router-dom"


function ProductCard(props) {
  return (
    <div className="ProductCard">
      <Link to={"/categories/" + props.prud.category +"/"+ props.prud.id}><><text>ID:{props.prud.id}</text>
      <br />
      <img src={props.prud.image} />
      <p><h3>${props.prud.price}</h3></p>
      <span>{props.prud.title}</span>
      <br /></></Link>
      {!props.pruds || !props.pruds[props.prud.id]? <button onClick={()=> props.addCart(props.prud.id)}>{'add to cart'}</button>: <span><button onClick={()=> props.voidCart(props.prud.id)}>-</button>{props.pruds[props.prud.id]}<button onClick={()=> props.addCart(props.prud.id)}>+</button></span>}
    </div>
  )
}

export default ProductCard