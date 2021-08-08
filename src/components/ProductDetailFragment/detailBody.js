import {Fragment} from 'react';
import { Link } from "react-router-dom";

function DetailBody(){
   


     
    
    return(
        <Fragment >
            <div id="DetailBodyContainer" >
                <h4>TOTE BAG <p>-LEFT</p> </h4>
                <p>all start black and white tote bag 16 inches 
                    and pure leather Durable space big ewrite 
                </p>
                <ul id="DetailBodyContainer__ul">
                    <li id="DetailBodyContainer__ul__li1">
                        <span id="DetailBodyContainer__ul__li1__span1"><h3>NGN</h3></span>
                        <span id="DetailBodyContainer__ul__li1__span2"><input></input></span>
                    </li>
                    <li> 
                        <select id="color" name="color">
                            <option value="volvo">color</option>
                            <option value="volvo">red</option>
                            <option value="saab">blue</option>
                            <option value="fiat">pink</option>
                            <option value="audi">black</option>
                        </select>
                    </li>
                    <li id="DetailBodyContainer__ul__li2">
                        <select id="size" name="size">
                            <option value="volvo">20</option>
                            <option value="saab">25</option>
                            <option value="fiat">30</option>
                            <option value="audi">35</option>
                        </select>
                    </li>
                    <li id="DetailBodyContainer__ul__li3">
                        <select id="num" name="num">
                            <option value="volvo">1</option>
                            <option value="saab">2</option>
                            <option value="fiat">3</option>
                            <option value="audi">4</option>
                        </select>
                    </li>
                </ul>

                <ul id="DetailBodyContainer__Delivery">
                    <li>Delivery</li>
                    <li>
                        <select id="chooseDelivery" name="chooseDelivery">
                            <option value="volvo">1</option>
                            <option value="saab">2</option>
                            <option value="fiat">3</option>
                            <option value="audi">4</option>
                        </select>
                    </li>
                </ul>
                <ul id="DetailBodyContainer__Address">
                    <li>Address</li>
                    <li>
                        <select id="chooseAddress" name="chooseAddress">
                            <option value="volvo">1</option>
                            <option value="saab">2</option>
                            <option value="fiat">3</option>
                            <option value="audi">4</option>
                        </select>
                    </li>
                </ul>
                <ul id="DetailBodyContainer__check">
                    <li><Link className="DetailBodyContainer__check__link" to={"#"}>CHECK</Link></li>
                    <li><Link   className="DetailBodyContainer__check__link" to={"#"}>BUY NOW</Link></li>
                    <li><Link  className="DetailBodyContainer__check__link"  to={"#"}>TO CART</Link></li>
                </ul>
                <ul id="DetailBodyContainer__DeliveryFee">
                    <li>Delivery fee</li>
                    <li>NGN</li>
                </ul>
                <ul id="DetailBodyContainer__Packaging">
                    <li>Packaging</li>
                    <li>NGN 0.00</li>
                </ul>
                <ul id="DetailBodyContainer__TOTAL">
                    <li>TOTAL</li>
                    <li>NGN 3,000.00</li>
                </ul>
            </div>
        </Fragment>
    )
}
export default DetailBody;