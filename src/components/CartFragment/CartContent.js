import { blue } from '@material-ui/core/colors';
import {Fragment ,useEffect,useState} from 'react';
import { Link,useParams } from "react-router-dom";
import beauty2 from "../../assets/beauty1.png";
import {DeleteIcon,CheckCircleIcon} from "../icons";
import swal from 'sweetalert';


function CartContent(props){
    let[num,setnum]=useState(1);
    let[cartContent,setCartContent]=useState([]);


    function decrease(){
        if(num!=1){
            num--;
            setnum(num)
        }
        return num;
    }
    function increase(){
        if(num!=0){
            num++;
            setnum(num)
        }
        return num
    }
    function deleteFile(url){
        swal({
            title: "Are you sure?",
            text: "<img src='"+url+"' style='width:150px;'>",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            html: true
          })
          .then((willDelete) => {
            cartContent=cartContent.filter((obj)=>{
                return obj.url!=url
            })
            localStorage.setItem('data', JSON.stringify(cartContent))
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
        let datas= JSON.parse(localStorage.getItem('data'))
        if(datas){
            setCartContent(datas)
        }
       
    },[])
    let carts=cartContent.map((data,index)=>{
        return(
            <div className="CartContentContainer__items" key={data.url}>
            <ul className="CartContentContainer__items__section1">
                <li className="CartContentContainer__items__section1__img">
                    <img src={data.url}></img>
                </li>
                <li className="CartContentContainer__items__section1__text">
                    <ul className="CartContentContainer__items__section1__text__ul1">
                        <li>{data.title} <CheckCircleIcon style={{fontSize: 10 + 'px',color:'blue'}}/></li>
                        <li> 
                            <DeleteIcon onClick={()=>deleteFile(data.url)}/>
                        </li>
                    </ul>
                    <p>{data.description} 
                    </p>
                    <ul  className="CartContentContainer__items__section1__text__ul2">
                        <li ><h3>NGN {data.amount}</h3></li>
                        <li onClick={()=>decrease()}>-</li>
                        <li>{num}</li>
                        <li onClick={()=>increase()}>+</li>
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
                <li ><Link  className="CartContentContainer__items__section2__buynow" to={""}>BUY NOW</Link></li>
                <li ><Link  className="CartContentContainer__items__section2__CONFIRM"to={""}>CONFIRM ARRIVAL</Link></li>
            </ul>
        </div>
        )
    })
    return(
    
        <Fragment >
            <div id="CartContentContainer">
                {carts}
            </div>
        </Fragment>
    )
}
export default CartContent;