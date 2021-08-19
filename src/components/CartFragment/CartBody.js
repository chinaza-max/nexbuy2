import React,{useState,useEffect} from 'react';
import CartNav from '../CartPurchaseFragment/Nav2';
import Footer from "../homeFragment/footer";
import CartContent from "./CartContent"
import "../../styles/cart.css";



const CartBody=(props)=>{
    const[HeaderTitle,setHeaderTitle]=useState("My cart")
    const[cartCount,setCartCount]=useState()
    function cartCountUpdate(){
    
        let datas= JSON.parse(localStorage.getItem('cartData'))
        if(datas){
            setCartCount(datas.length)
        }
        else if(datas==null){
            setCartCount(0)
        }
    }
    useEffect(async()=>{  
        let datas= JSON.parse(localStorage.getItem('cartData'))
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
               <CartContent cartCountUpdateP={cartCountUpdate}/>
               <Footer home={3}  history={props.history} cartCountP={cartCount}/>
            </div>
    )
}
export default CartBody;