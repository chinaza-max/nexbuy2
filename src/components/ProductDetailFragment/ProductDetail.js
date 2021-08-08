import React,{useState} from 'react';
import Nav2 from "../ProductDetailFragment/Nav2";
import DetailSlide from "./detailSlide";
import DetailBody from "./detailBody";

const ProductDetail=()=>{
    return(
            <div id="DetailContainer">
                <Nav2/>
                <DetailSlide/>
                <DetailBody/>
            </div>
    )
}

export default ProductDetail;