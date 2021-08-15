import React,{useState} from 'react';
import Nav2 from "./Nav2";
import CartPurchaseDetail from "./CartPurchaseDetail";
import "../../styles/cartPurchase.css"

//  <DetailSlide/>
const CartPurchaseBody=(props)=>{
    let title="cart purchase"
    return(
            <div id="DetailContainer">
                <Nav2 title={title} history={props.history}/>
              
                <CartPurchaseDetail/>
            </div>
    ) 
}

export default CartPurchaseBody;