import React,{useState} from 'react';
import Nav2 from "./Nav2";
import DetailBody from "./detailBody";
import "../../styles/cartPurchase.css"

//  <DetailSlide/>
const ProductDetail=(props)=>{
    let title="cart purchase"
    return(
            <div id="DetailContainer">
                <Nav2 title={title} history={props.history}/>
              
                <DetailBody/>
            </div>
    ) 
}

export default ProductDetail;