import {Fragment ,useEffect} from 'react';
import { Link,useParams } from "react-router-dom";
import beauty2 from "../../assets/beauty1.png";


function CartContent(props){
    /*const {id}=useParams()
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
    },[])*/
    return(
        <Fragment >
            <div id="CartContentContainer">
                <div className="CartContentContainer__items">
                    <ul className="CartContentContainer__items__section1">
                        <li className="CartContentContainer__items__section1__img">
                            <img src={beauty2}></img>
                        </li>
                        <li className="CartContentContainer__items__section1__text">
                            <ul className="CartContentContainer__items__section1__text__ul1">
                                <li>Leks_vintage</li>
                                <li>ddd</li>
                            </ul>
                            <p>The description of the item you want 
                                to by comes here.font get me wrong.
                            </p>
                            <ul  className="CartContentContainer__items__section1__text__ul2">
                                <li><h3>NGN 30000</h3></li>
                                <li>-</li>
                                <li>1</li>
                                <li>+</li>
                            </ul>

                            <ul className="CartContentContainer__items__section1__text__ul3">
                                <li>deliverby</li>
                                <li>
                                    <select className="deliverby" name="deliverby">
                                        <option value="volvo">1</option>
                                        <option value="saab">2</option>
                                        <option value="fiat">3</option>
                                        <option value="audi">4</option>
                                    </select>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul  className="CartContentContainer__items__section2">
                        <li ><Link  className="CartContentContainer__items__section2__buynow">BUY NOW</Link></li>
                        <li ><Link  className="CartContentContainer__items__section2__CONFIRM">CONFIRM ARRIVAL</Link></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}
export default CartContent;