import { blue } from '@material-ui/core/colors';
import {Fragment ,useEffect,useState} from 'react';
import { Link,useParams } from "react-router-dom";
import beauty2 from "../../assets/beauty1.png";
import {DeleteIcon,CheckCircleIcon,CircularIndeterminate,SimpleAlerts} from "../icons";
import swal from 'sweetalert';

function CartContent(props){
    let[num,setnum]=useState(1);
    let[cartContent,setCartContent]=useState([]);
    let[emptyMessage,setEmptyMessage]=useState();

    function decrease(index,amount){
        
        let elementToDisplayNum=document.querySelectorAll(".itemNumber")[index]
        let elementToDisplayAmount=document.querySelectorAll(".amountSingleItem")[index]
        let number =parseInt(elementToDisplayNum.innerHTML)
       
        if(number!=1){
            number--;
            elementToDisplayNum.innerHTML=number
            elementToDisplayAmount.innerHTML=number*amount
        }
        return num;
    }
    function increase(index,amount){
        let elementToDisplayNum=document.querySelectorAll(".itemNumber")[index]
        let elementToDisplayAmount=document.querySelectorAll(".amountSingleItem")[index]
        let number =parseInt(elementToDisplayNum.innerHTML)
        console.log()
        if(number!=0){
            number++;
            elementToDisplayNum.innerHTML=number
            elementToDisplayAmount.innerHTML=number*amount
        }
    }
    function deleteFile(title){
        swal({
            title: "Are you sure?",
            text:`youwant to delete ${title}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
            html: true
          })
          .then((willDelete) => {
            try {
                window.localStorage.setItem('data', JSON.stringify(cartContent))//saves to the database, "key", "value"
              } catch (e) {
                if (e) {
                    //QUOTA_EXCEEDED_ERR
                  alert('Quota exceeded!'); //data wasn't successfully saved due to quota exceed so throw an error
                }
              }
         
            setCartContent(cartContent)
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
                text: "deleted",
                html: true
              });

            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }
    /*const {id}=useParams()
    function toggle(){
        let element=document.getElementById("LogoContainer__dropDown")
        element.classList.toggle("toggle")
    }
    function filteredTextHolder(e){
        props.filteredTextFunP(e.target.value)
    }*/

    useEffect(()=>{
        let datas= JSON.parse(window.localStorage.getItem('data'))
        console.log( typeof( datas))
        if(datas){
            setCartContent(datas)
        }
        else if(datas==null){
            setEmptyMessage("your cart is empty")
        }
       
    },[emptyMessage])
    let carts=cartContent.map((data,index)=>{
        return(
            <div className="CartContentContainer__items" key={data.url+index}>
            <ul className="CartContentContainer__items__section1">
                <li className="CartContentContainer__items__section1__img">
                    <img src={data.url}></img>
            </li>
                <li className="CartContentContainer__items__section1__text">
                    <ul className="CartContentContainer__items__section1__text__ul1">
                        <li>{data.title} <CheckCircleIcon style={{fontSize: 10 + 'px',color:'blue'}}/></li>
                        <li> 
                            <DeleteIcon onClick={()=>deleteFile(data.title)}/>
                        </li>
                    </ul>
                    <p>{data.description} 
                    </p>
                    <ul  className="CartContentContainer__items__section1__text__ul2">
                        <li ><h3>NGN  <span className="amountSingleItem">{data.amount}</span></h3></li>
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
                <li ><Link  className="CartContentContainer__items__section2__buynow" to={""}>BUY NOW</Link></li>
                <li ><Link  className="CartContentContainer__items__section2__CONFIRM"to={""}>CONFIRM ARRIVAL</Link></li>
            </ul>
        </div>
        )
    })
    return(
    
        <Fragment>
            <div id="CartContentContainer">
                {cartContent!=""? carts:emptyMessage? <SimpleAlerts emptyMessagep={emptyMessage}/>:<CircularIndeterminate/>}
            </div>
        </Fragment>
    )
}
export default CartContent;