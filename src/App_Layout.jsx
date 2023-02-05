import { useState } from "react"
import Cart from "./App_Cart"
import Header from "./App_Header"
import Main from "./App_Main"


const prud = []

function Layout() {
  const [arrPrud, setArrPrud] = useState()
  const [itemId, setItemId] = useState()
   

         const addCart = (id)=>{  
          setItemId(id)
         !prud[itemId]? prud[itemId]= 1: prud[itemId]+=1;
          setArrPrud(prud);
        }

        const voidCart = (id)=>{
         setItemId(d=> d=id)
         prud[itemId] !=1?  prud[itemId]-=1: prud[itemId] = '';
         setArrPrud(p=> p=prud);
        }


  return (
    <div>
      <Header/>
      <Main addCart ={addCart} voidCart = {voidCart} pruds ={arrPrud} />
      <Cart prud ={arrPrud} addCart ={addCart} voidCart = {voidCart}/>
    </div>
  )
}

export default Layout