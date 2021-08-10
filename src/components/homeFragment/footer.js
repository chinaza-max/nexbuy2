import {Fragment,useEffect,useState} from 'react';
import {HomeIcon,ShopIcon,ShoppingCartIcon,AccountCircleIcon} from "../icons";
import { Link } from "react-router-dom";

function Footer(props){
    const[Links,setLink]=useState()

    function changeStyle(){
        for(let i=0; i<Links.length; i++){
            const element=Links[i];
            element.classList.remove("active")
        }
        Links[props.home].classList.add("active")
    }
    useEffect(()=>{
        let Links=document.querySelectorAll(".FooterContainer__nav__HomeLink");
        console.log(Links)
        setLink(Links)
        //changeStyle()
    },[])




    return(
        <Fragment >
           <div className="FooterContainer FooterContainer-M">
                <ul className="FooterContainer__nav">
                    <li>
                        <Link className="FooterContainer__nav__HomeLink" to={"#"} >
                            <span><HomeIcon/> </span> 
                            <span>HOME</span> 
                        </Link>
                    </li>
                    <li>
                        <Link className="FooterContainer__nav__HomeLink" to={"#"}>
                            <span><ShopIcon/></span> 
                            <span>STORE</span> 
                        </Link>
                    </li>
                    <li>
                        <Link className="FooterContainer__nav__HomeLink" to={"#"}>
                            <span><ShoppingCartIcon/></span> 
                            <span>CART</span> 
                        </Link>
                    </li>
                    <li>
                        <Link className="FooterContainer__nav__HomeLink" to={"#"}>
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