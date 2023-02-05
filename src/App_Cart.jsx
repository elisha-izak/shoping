import CartCard from "./App_CartCard"

function Cart(props) {

  
  console.log(props.pruds);
  return (
    <div className="Cart">
      <h3>Cart</h3>
      {props.pruds? props.pruds.map((v,i)=> v? <CartCard card ={i} pruds = {props.pruds} stock = {v} addCart={props.addCart} voidCart = {props.voidCart}/>:v):''}
    </div>
  )
}

export default Cart