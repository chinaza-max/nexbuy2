import React,{useState,useEffect} from 'react';
import CartNav from '../CartPurchaseFragment/Nav2';
import Footer from "../homeFragment/footer";
import CartContent from "./CartContent"
import "../../styles/cart.css";



const CartBody=(props)=>{
    const[HeaderTitle,setHeaderTitle]=useState()
    const[cartCount,setCartCount]=useState()
    useEffect(async()=>{  
        let datas= JSON.parse(window.localStorage.getItem('data'))
        console.log( typeof( datas))
        if(datas){
            setCartCount(datas.length)
        }
        else if(datas==null){
            setCartCount(0)
        }
    })
    return(
            <div id="CartContainer">
               <CartNav title={HeaderTitle} history={props.history}/>
               <CartContent/>
               <Footer home={3}  history={props.history} cartCountP={cartCount}/>
            </div>
    )
}
export default CartBody;