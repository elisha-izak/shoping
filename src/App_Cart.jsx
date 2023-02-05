import CartCard from "./App_CartCard"

function Cart(props) {

  
  console.log(props.prud);
  return (
    <div className="Cart">
      <h3>Cart</h3>
      {props.prud? props.prud.map((v,i)=> v? <CartCard card ={i} stock = {v} addCart={props.addCart} voidCart = {props.voidCart}/>:v):''}
    </div>
  )
}

export default Cart