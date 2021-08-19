import {Fragment ,useEffect,useState} from 'react';
import { Link,useParams } from "react-router-dom";
import {DeleteIcon,CircularIndeterminate,SimpleAlerts} from "../icons";
import Button from  "../paymentSystem/paymentBody"
//import swal from 'sweetalert';
import Swal from 'sweetalert2'


function CartContent(props){
    const[num,setnum]=useState(1);
    const[cartContent,setCartContent]=useState([]);
    const[emptyMessage,setEmptyMessage]=useState();
   
    function decrease(index,amount){
        let elementToDisplayNum=document.querySelectorAll(".itemNumber")[index]
        let elementToDisplayAmount=document.querySelectorAll(".amountSingleItem")[index]
        let number=parseInt(elementToDisplayNum.innerHTML)
       
        if(number!=1){
            number--;
            elementToDisplayNum.innerHTML=number
            elementToDisplayAmount.innerHTML=(number*amount).toFixed(1);
        }
        return num;
    }
    function increase(index,amount){
        let elementToDisplayNum=document.querySelectorAll(".itemNumber")[index]
        let elementToDisplayAmount=document.querySelectorAll(".amountSingleItem")[index]
        let number =parseInt(elementToDisplayNum.innerHTML)
        if(number!==0){
            number++;
            elementToDisplayNum.innerHTML=number
            elementToDisplayAmount.innerHTML=(number*amount).toFixed(2);
        }
    }
    function deleteFile(description,URL,altURL,id){

        Swal.fire({
            title: 'remove from cart?',
            text: description,
            imageUrl:URL,
            imageWidth: 200,
            imageHeight:150,
            imageAlt: altURL,
            showCancelButton: true,
            titleColor:"#ED3137",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                
                    let datas= JSON.parse(localStorage.getItem('cartData'))
                    //this section remove the deleted file and create a new cart
                    let NewcartContent=datas.filter((obj)=>{
                        return id!==obj.id
                    })
                    setCartContent(NewcartContent)
                    //this checks if cart is empty
                    if(datas.length===1){
                        setEmptyMessage("your cart is empty")
                    }
                    localStorage.setItem('cartData', JSON.stringify(NewcartContent))//saves to the database, "key", "value";
                    //for updating cart count
                    props.cartCountUpdateP()
    
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
        })

    }

    function   restoreCheck2(){
        let datas=JSON.parse(localStorage.getItem('cartData'));
    
            datas.forEach((element,index) => {
              if(element.check==="false"){
                 document.querySelectorAll(".checkcart")[index].checked=false
                 document.querySelectorAll(".checkcart")[index].setAttribute("aria-checked", false)
              }
              else{
              
                 document.querySelectorAll(".checkcart")[index].checked=true
                 document.querySelectorAll(".checkcart")[index].setAttribute("aria-checked", true)
              }
            })
    }
    function updateRestoreCheck2(index,id){
        let checkState=document.querySelectorAll(".checkcart")[index].checked
        let datas=JSON.parse(localStorage.getItem('cartData'))
        console.log(checkState)
        if(checkState){
           
          let newStore= datas.map((data)=>{
                              if(data.id===id){
                                return { ...data, check: true }
                              }
                              else{
                                return data
                              }
                          })         
          localStorage.setItem('cartData', JSON.stringify(newStore))
        }
        else{
              let newStore= datas.map((data)=>{
                  if(data.id===id){
                    return { ...data, check: false }
                  }
                  else{
                    return data
                  }
              })         
              localStorage.setItem('cartData', JSON.stringify(newStore))
        }
        datas=JSON.parse(localStorage.getItem('cartData'))
        console.log(datas[0].check)

    }
    useEffect(()=>{
        let datas= JSON.parse(localStorage.getItem('cartData'))
       
        if(datas){
            if(datas.length>0){
                setCartContent(datas)
                setTimeout(() => {
                    restoreCheck2()
                  }, 10)
            }
            else{
                setEmptyMessage("your cart is empty")
            }
        }
        else if(datas===null||datas.length===0){
            setEmptyMessage("your cart is empty")
        }
       
    },[emptyMessage])
    let carts=cartContent.map((data,index)=>{
        return(
            <div className="CartContentContainer__items" key={data.id}>
            <ul className="CartContentContainer__items__section1">
                <li className="CartContentContainer__items__section1__img" role="figure">
                    <img src={data.url} alt={data.altUrl}></img>
                </li>
                <li className="CartContentContainer__items__section1__text">
                    <ul className="CartContentContainer__items__section1__text__ul1">
                        <li>{data.title+" "}  <input type="checkbox" role="checkbox" aria-checked="false" className="checkcart" onClick={()=>updateRestoreCheck2(index,data.id)}/>  </li>
                        <li> 
                            <DeleteIcon onClick={()=>deleteFile(data.description,data.url,data.altUrl,data.id)}/>
                        </li>
                    </ul>
                    <p>{data.description} 
                    </p>
                    <ul  className="CartContentContainer__items__section1__text__ul2">
                        <li><h3>NGN  <span className="amountSingleItem">{data.amount}</span></h3></li>
                        <li onClick={()=>decrease(index,data.amount)}>-</li>
                        <li className="itemNumber">{num}</li>
                        <li onClick={()=>increase(index,data.amount)}>+</li>
                    </ul>
                    <ul className="CartContentContainer__items__section1__text__ul3">
                        <li>deliverby</li>
                        <li>
                            <select className="deliverby" name="deliverby">
                                <option value="volvo">over night shipping</option>
                                <option value="saab">same Day </option>
                                <option value="fiat">parcel</option>
                                <option value="audi">standard</option>
                            </select>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul  className="CartContentContainer__items__section2">
                <li><Button  role="button" aria-pressed="false"  indexP={index}   heightP={"48px"} borderP={12}  itemNameP={data.title} idP={data.id}/></li>
                <li><Link  className="CartContentContainer__items__section2__CONFIRM"to={"#"}>CONFIRM ARRIVAL</Link></li>
            </ul>
        </div>
        )
    })
    return(
    
        <Fragment>
            <div id="CartContentContainer">
                {cartContent.length!==0? carts:emptyMessage? <SimpleAlerts emptyMessagep={emptyMessage}/>:<CircularIndeterminate/>}
            </div>
        </Fragment>
    )
}
export default CartContent;