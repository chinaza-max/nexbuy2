import {Fragment,useEffect,useState} from 'react';
import {HomeIcon,ShopIcon,ShoppingCartIcon,AccountCircleIcon} from "../icons";
import { Link } from "react-router-dom";

function Footer(props){
    const[currentStyle,setCurrentStyle]=useState()

    useEffect(()=>{
        setCurrentStyle(props.home)
    },[])




    return(
        <Fragment >
           <div className="FooterContainer FooterContainer-M">
                <ul className="FooterContainer__nav">
                    <li>
                        <Link  className={currentStyle === 0 ? "FooterContainer__nav__HomeLink active" : "FooterContainer__nav__HomeLink"} to={"/"} >
                            <span><HomeIcon/> </span> 
                            <span>HOME</span> 
                        </Link>
                    </li>
                    <li>
                        <Link className={currentStyle === 1 ? "FooterContainer__nav__HomeLink active" : "FooterContainer__nav__HomeLink"} to={"#"}>
                            <span><ShopIcon/></span> 
                            <span>STORE</span> 
                        </Link>
                    </li>
                    <li>
                        <Link className={currentStyle === 3 ? "FooterContainer__nav__HomeLink active" : "FooterContainer__nav__HomeLink"} to={"/Home/cart"}>
                            <span><ShoppingCartIcon/></span> 
                            <span>CART</span> 
                        </Link>
                    </li>
                    <li>
                        <Link className={currentStyle === 4 ? "FooterContainer__nav__HomeLink active" : "FooterContainer__nav__HomeLink"} to={"#"}>
                            <span><AccountCircleIcon/></span> 
                            <span>ACCOUNT</span>  
                        </Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}
export default Footer;