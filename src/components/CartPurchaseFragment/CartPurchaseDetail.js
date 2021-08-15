import { Link } from "react-router-dom";
import {Fragment,useState,useEffect} from 'react';
import {CircularIndeterminate,SimpleAlerts} from "../icons";
import Button from  "../paymentSystem/paymentBody"


function CartPurchaseDetail(){
   
    const[styleFor__slides,setStyleFor__slides]=useState()
    const[cartToPurchase,setCartToPurchase]=useState([])
    const[totalAmount,setTotalAmount]=useState()
    let[emptyMessage,setEmptyMessage]=useState();
    const[dots,setDots]=useState()
    const[slide,setSlide]=useState()
    let slideIndex=0;
    let interval='';

    
/*function showslide(){
    slideIndex++;
  
        if(slide){  
            console.log(slide)  
            if(slideIndex>slide.length){
                slideIndex=1; 
                //console.log(slide.length)
            }
            else if(slideIndex<1){  
                slideIndex=slide.length
                // console.log(slide.length)
            }
            for(let i=0; i<dots.length; i++){
                const element=dots[i];
                element.classList.remove("dot-active")
            }
            setDetailSliderContainer__slidesStyle({"left":`-${slideIndex-1}00%`})
            dots[slideIndex-1].classList.add("dot-active")
        }
    }*/
    function select(amount,index){
       let num=document.getElementById(`select${index}`).value
       let placeHolder=document.querySelectorAll(".placeHolder");
       placeHolder[index].placeholder=num*amount
       calTotalAmount()
    }
    function currentslide(index){
        let dots=document.querySelectorAll(".DetailSliderContainer__slides__dot span");
         
        //setDots(dots)
        for(let i=0; i<dots.length; i++){
            const element=dots[i];
            element.classList.remove("dot-active")
        }
    
        for(let i=0; i<dots.length; i++){
            const element=dots[i];
            element.classList.remove("dot-active")
        }
       
        setStyleFor__slides({"left":`-${index}00%`,"width":`-${index+1}00%`})
      
        dots[index].classList.add("dot-active")
        slideIndex=index
    }
    function calTotalAmount(){
        let total=1000;
        let placeHolder=document.querySelectorAll(".placeHolder");
        placeHolder.forEach((input)=>{
            total+= parseInt(input.placeholder)
        })
        console.log(total)
        setTotalAmount(total)
    }
    useEffect(()=>{
       // interval=window.setInterval(()=>{ showslide()},2000)
       
        let slide=document.querySelectorAll(".DetailSliderContainer__slides_slide");
      
        
        setSlide(slide)
        let datas=JSON.parse(window.localStorage.getItem('data'))
        calTotalAmount()
        if(datas){
            setCartToPurchase(datas)
            setStyleFor__slides({"width":`${datas.length}00%`})
        }
        else if(datas==null){
            setEmptyMessage("No item to purchase ")
        }
     
    },[totalAmount])
    let cartsToBuy=cartToPurchase.map((data,index)=>{
                        return(
                            <li className="DetailSliderContainer__slides_slide" key={index}>
                                <img src={data.url}  alt={data.altUrl}/>
                                <h4 className="title">{data.title}<p>-LEFT</p> </h4>
                                <p>{data.description}</p>
                                <ul className="DetailBodyContainer__ul">
                                    <li className="DetailBodyContainer__ul__li1">
                                        <span className="DetailBodyContainer__ul__li1__span1"><h3>NGN</h3></span>
                                        <span className="DetailBodyContainer__ul__li1__span2"><input className="placeHolder" placeholder={data.amount} readOnly></input></span>
                                    </li>
                                    <li> 
                                        <select className="color" name="color">
                                             <option>COLOR</option>
                                             {data.color.map((data)=>{
                                                    return(
                                                            <option value={data} key={data}>{data}</option>
                                                    )})}
                                        </select>
                                    </li>
                                    <li className="DetailBodyContainer__ul__li2">
                                        <select className="size" name="size">
                                            <option value="volvo">size</option>
                                            <option value="volvo">20</option>
                                            <option value="saab">25</option>
                                            <option value="fiat">30</option>
                                            <option value="audi">35</option>
                                        </select>
                                    </li>
                                    <li className="DetailBodyContainer__ul__li3" >
                                        <select className="num" name="num" id={`select${index}`} onChange={()=>(select(data.amount,index))}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </li>
                                </ul>
                            </li>
                        )
    })

         
    
    return(
        <Fragment>
                <div id="DetailSliderContainer" >
                   
                    <ul className="DetailSliderContainer__slides" style={styleFor__slides}>
                                {cartsToBuy!=""? cartsToBuy:""}
                    </ul>
                    <div className="DetailSliderContainer__slides__dot  DetailSliderContainer__slides__dots-M">
                        {cartToPurchase.map((data,index)=>{
                            return(
                            <span className="DetailSliderContainer__slides__dots" onClick={()=>currentslide(index)} key={index}></span>
                        )   })}
                    </div>

        
                </div>  
                {cartToPurchase!=""?

                        <div id="DetailBodyContainer">
                             <ul id="DetailBodyContainer__Delivery">
                                 
                                <li>Delivery</li>
                                <li>
                                    <select id="chooseDelivery" name="chooseDelivery">
                                        <option value="volvo">over night shipping</option>
                                        <option value="saab">same Day </option>
                                        <option value="fiat">parcel</option>
                                        <option value="audi">standard</option>
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
                                <li><Link className="DetailBodyContainer__check__link" to={"#"} id="CHECK">CHECK</Link></li>
                                <li><Button  className="DetailBodyContainer__check__link" totalAmountP={totalAmount} heightP={"55px"} borderP={0}/></li>
                                <li><Link  className="DetailBodyContainer__check__link"  to={"/Home/cart"} >TO CART</Link></li>
                            </ul>
                            <ul id="DetailBodyContainer__DeliveryFee">
                                <li>Delivery fee</li>
                                <li>NGN 1000</li>
                            </ul>
                            <ul id="DetailBodyContainer__Packaging">
                                <li>Packaging</li>
                                <li>NGN 0.00</li>
                            </ul>
                            <ul id="DetailBodyContainer__TOTAL">
                                <li>TOTAL</li>
                                <li>NGN {totalAmount}</li>
                            </ul>
                        </div>
                : emptyMessage? <SimpleAlerts emptyMessagep={emptyMessage}/>:<CircularIndeterminate/>}                
        </Fragment>
    )
}
export default CartPurchaseDetail;