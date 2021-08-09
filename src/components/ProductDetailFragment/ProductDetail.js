import React,{useState} from 'react';
import Nav2 from "../ProductDetailFragment/Nav2";
import DetailSlide from "./detailSlide";
import DetailBody from "./detailBody";

const ProductDetail=()=>{
    let title="title"
    return(
            <div id="DetailContainer">
                <Nav2 title={title}/>
                <DetailSlide/>
                <DetailBody/>
            </div>
    )
}

export default ProductDetail;