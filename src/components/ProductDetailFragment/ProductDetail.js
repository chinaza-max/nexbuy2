import React,{useState} from 'react';
import Nav2 from "../ProductDetailFragment/Nav2";
import DetailSlide from "./detailSlide";
import DetailBody from "./detailBody";
//  <DetailSlide/>
const ProductDetail=(props)=>{
    let title="title"
    return(
            <div id="DetailContainer">
                <Nav2 title={title} history={props.history}/>
              
                <DetailBody/>
            </div>
    ) 
}

export default ProductDetail;