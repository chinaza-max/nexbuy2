import {Fragment ,useEffect} from 'react';
import { Link,useParams } from "react-router-dom";



function LogoContainer(props){
    const {id}=useParams()
    function toggle(){
        let element=document.getElementById("LogoContainer__dropDown")
        element.classList.toggle("toggle")
    }
    function filteredTextHolder(e){
        props.filteredTextFunP(e.target.value)
    }
    useEffect(()=>{
        document.getElementById("LogoContainer__cancel").addEventListener("click",toggle)
        document.querySelectorAll(".LogoContainer__menu").forEach((element)=>{
            element.addEventListener("click",toggle)
        })
    },[])
    return(
        <Fragment >
            <div className="LogoContainer LogoContainer-M">
                <h2>NEXAPP</h2>
                <input type="text" className="search" placeholder="search..." onChange={filteredTextHolder} ></input>
            
                <span className="LogoContainer__menu" id="bar__1"></span>
                <span className="LogoContainer__menu" id="bar__2"></span>
                <span className="LogoContainer__menu" id="bar__3"></span>
                
                <ul  className="LogoContainer__dropDown LogoContainer__dropDown-M" id="LogoContainer__dropDown">
                    <li className="LogoContainer__dropDown__item">
                        <Link   to={`/`} id="LogoContainer__dropDown__item__link" >
                            Home
                        </Link>  
                    </li>
                    <li className="LogoContainer__dropDown__item"> 
                        <Link   to={`/home/${id}/CartPurchase`} id="LogoContainer__dropDown__item__link">
                            Cart Purchase
                        </Link>  
                    </li>
                    <li className="LogoContainer__dropDown__item">
                        <Link  to={"/Home/cart"} id="LogoContainer__dropDown__item__link">
                            Cart 
                        </Link>  
                    </li>
                    <div className="LogoContainer__cancel" id="LogoContainer__cancel">
                        <span className="LogoContainer__cancel__cancel__bar1 cancel_1"></span>
                        <span className="LogoContainer__cancel__cancel__bar2 cancel_2"></span>
                    </div>
                </ul>
              
            </div>
           
        </Fragment>
    )
}
export default LogoContainer;