import { useState } from "react";


function CartCard(props) {
    const [card,setCard] = useState('');

    fetch('https://fakestoreapi.com/products/' + props.card)
  .then(res=>res.json())
  .then(itemId=> setCard(itemId))
  return (
    <div className="CartCard">
      {card?<> <text>ID:{card.id}</text>
      <br />
      <img src={card.image} />
      <p><h3>${card.price}</h3></p>
      <span>{card.title}</span>
      <br />
      <span><button onClick={()=> props.voidCart(card.id)}>-</button>{props.stock}<button onClick={()=> props.addCart(card.id)}>+</button></span></>:'loading...'}
    </div>
  )
}

export default CartCard