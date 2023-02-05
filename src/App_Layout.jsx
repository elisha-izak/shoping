import { useState } from "react"
import Cart from "./App_Cart"
import Header from "./App_Header"
import Main from "./App_Main"


const prud = []

function Layout() {
  const [arrPrud, setArrPrud] = useState()


         const addCart = (id)=>{  
         !prud[id]? prud[id]= 1: prud[id]+=1;
          setArrPrud(prud);
        }

        const voidCart = (id)=>{
         prud[id] !=1?  prud[id]-=1: prud[id] = '';
         setArrPrud(p=> p=prud);
        }


  return (
    <div>
      <Header/>
      <Main addCart ={addCart} voidCart = {voidCart} pruds ={arrPrud} />
      <Cart pruds ={arrPrud} addCart ={addCart} voidCart = {voidCart}/>
    </div>
  )
}

export default Layout