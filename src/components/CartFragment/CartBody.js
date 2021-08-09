import React,{useState,useEffect} from 'react';
import CartNav from '../ProductDetailFragment/Nav2';
import Footer from "../homeFragment/footer";
import CartContent from "./CartContent"
import "../../styles/cart.css";



const CartBody=()=>{
    const[HeaderTitle,setHeaderTitle]=useState()

    useEffect(async()=>{  
        setHeaderTitle("Cart")
    })
    return(
            <div id="CartContainer">
               <CartNav title={HeaderTitle}/>
               <CartContent/>
               <Footer/>
            </div>
    )
}
export default CartBody;