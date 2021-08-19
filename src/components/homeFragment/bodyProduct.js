import {Fragment,useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import {ShoppingCartIcon,CircularIndeterminate,DescriptionAlerts} from "../icons";
import axios from "axios"
import Swal from 'sweetalert2';
import "animate.css"

// <CheckCircleIcon style={{fontSize: 10 + 'px',color:'blue'}}/>


function Product(props){
    const[Products,setProducts]=useState([])
    const[error,setError]=useState()
   

    /*
    function  collectionToPurchase(title,description,url,color,amount,index,altUrl){
      let datas= JSON.parse(localStorage.getItem('purchaseCollection'))
      let checkState=document.querySelectorAll(".checkHome")[index].checked

     if(checkState){
        if(datas){
          if(datas.length===0){
            datas.push({title,description,url,color,amount,altUrl})
            localStorage.setItem('purchaseCollection', JSON.stringify(datas))
          }
          else{
              if(datas.some(obj=>obj.description===description)){
                  return
              }
              else{
                datas.push({title,description,url,color,amount,altUrl})
                localStorage.setItem('purchaseCollection', JSON.stringify(datas))
              }
          }
        }
        else{
          datas=[];
          datas.push({title,description,url,color,amount,altUrl})
          localStorage.setItem('purchaseCollection', JSON.stringify(datas))
        }
     }
     else{
        if(datas.length!==0){
          let NewcartContent=datas.filter((obj)=>{
            return description!==obj.description
          })
          localStorage.setItem('purchaseCollection', JSON.stringify(NewcartContent))
        }
     }
     
    }
*/
    function addToCart(title,description,url,color,amount,index,altUrl,id,check){
  
      let cartIcons=document.querySelectorAll(".cartIcons")
      cartIcons[index].style.display='none';
      let datas= JSON.parse(localStorage.getItem('cartData'))
      if(datas){
        if(datas.length===0){
          datas.push({title,description,url,color,amount,altUrl,id,check})
          localStorage.setItem('cartData', JSON.stringify(datas))
          props.cartCountP(datas.length)
        }
        else{
            if(datas.some(obj=>obj.id===id)){
                Swal.fire({
                  title: 'item already in cart',
                  showConfirmButton: false,
                  timer: 1100,
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })
              
                return
            }
            else{
              datas.push({title,description,url,color,amount,altUrl,id,check})
              localStorage.setItem('cartData', JSON.stringify(datas))
              props.cartCountP(datas.length)
            }
        }
      }
      else{
        datas=[];
        datas.push({title,description,url,color,amount,altUrl,id,check})
        localStorage.setItem('cartData', JSON.stringify(datas))
        props.cartCountP(datas.length)
      }
   
    }

    //this  function helps persist check input
    function restoreCheck(){
        let datas=JSON.parse(localStorage.getItem('store'));
    
            datas.forEach((element,index) => {
              console.log(element.check)
              if(element.check==="false"){
                 document.querySelectorAll(".checkHome")[index].checked=false
                 document.querySelectorAll(".checkHome")[index].setAttribute("aria-checked", false)
              }
              else{

                 document.querySelectorAll(".checkHome")[index].checked=true
                 document.querySelectorAll(".checkHome")[index].setAttribute("aria-checked", true)
              }
            })      
    }

    function updateRestoreCheck(index,id){
      let checkState=document.querySelectorAll(".checkHome")[index].checked
      let datas=JSON.parse(localStorage.getItem('store'))
      
      if(checkState){
         
        let newStore= datas.map((data)=>{
                            if(data.webID===id){
                              return { ...data, check: true }
                            }
                            else{
                              return data
                            }
                        })         
        localStorage.setItem('store', JSON.stringify(newStore))
      }
      else{
            let newStore= datas.map((data)=>{
                if(data.webID===id){
                  return { ...data, check: false }
                }
                else{
                  return data
                }
            })         
            localStorage.setItem('store', JSON.stringify(newStore))
      }
    }

     useEffect(async()=>{  
      const cancelToken = axios.CancelToken;
      const source = cancelToken.source();
     
      let datas=JSON.parse(localStorage.getItem('store'))
      if(datas){

         datas=JSON.parse(localStorage.getItem('store'))

         //this helps to update the check object  update in store  for browser that have load up the code previously with out having it;
         if(datas[0].check===undefined){
          let newDates=datas.map(obj=> ({ ...obj, check: 'false' }))
          localStorage.setItem('store', JSON.stringify(newDates))//saves to the database, "key", "value"
          datas=JSON.parse(localStorage.getItem('store'))
          setProducts(datas) 
          
            setTimeout(() => {
              restoreCheck()
            }, 10)
         }
         else{
            setProducts(datas) 
          
            setTimeout(() => {
              restoreCheck()
            }, 10)
         }
        
         
      }
      else if(datas===null){
          var options = {
            method: 'GET',
            url: 'https://kohls.p.rapidapi.com/products/list',
            params: {limit: '24', offset: '1', dimensionValueID: 'AgeAppropriate:Teens'},
            headers: {
              'x-rapidapi-key':process.env.REACT_APP_API_KEY,
              'x-rapidapi-host': 'kohls.p.rapidapi.com'
            }
          ,source
          };
          axios.request(options).then(function (response) {
            
            try {

              let newresponse=response.data.payload.products.map(obj=> ({ ...obj, check: 'false' }))
              localStorage.setItem('store', JSON.stringify(newresponse))//saves to the database, "key", "value"
              datas=JSON.parse(localStorage.getItem('store'))
             
              if(datas){
                setProducts(datas)
              
              }
            } catch (e) {
              if (e) {
                  //QUOTA_EXCEEDED_ERR
                alert('Quota exceeded!'); //data wasn't successfully saved due to quota exceed so throw an error
              }
            }
    
          }).catch(function (error) { 
             setError(JSON.stringify(error.response.data.message))
          });
         
      }
      
      return () => {
        source.cancel("axios request cancelled");
       }
   
    },[error])
    let ProductsContent=Products.map((data,index)=>{
                
                if(data.productTitle.toLowerCase().indexOf(props.searchStringP.toLowerCase())===-1){
                  
                  return ' '
                }
                else{
                  return(
                    <li key={data.webID}>
                      <Link className="productContainer__Link" to={"#"}>
                        <img  src={data.image.url} alt={data.altImageUrl}></img>
                      </Link>
                      <h5 aria-labelledby='product-title'>{data.productTitle.split(' ')[0]+" "+ data.productTitle.split(' ')[1]+" "}
                          <input type="checkbox" role="checkbox" aria-checked="false" className="checkHome" onClick={()=>updateRestoreCheck(index,data.webID)}/>
                         </h5>
                      <p>{data.productTitle}</p>
                      <div>
                        <span>NGN{" "+data.prices[0].regularPrice.minPrice}</span>
                        <span aria-label="Add to Cart"  style={{color:'red'}} onClick={()=>{addToCart(data.productTitle.split(' ')[0]+" "+ data.productTitle.split(' ')[1],
                          data.productTitle,data.image.url,data.availableColr,data.prices[0].regularPrice.minPrice,index,data.altImageUrl,data.webID,data.check)}}> <ShoppingCartIcon className="cartIcons"/></span>
                      </div>
                    </li>
                  )
                }
    })
    return(
    
        <Fragment >
            <ul id="productContainer">    
                  {Products.length!==0? ProductsContent :error?<DescriptionAlerts errorp={error}/>:<CircularIndeterminate/>} 
            </ul>
        </Fragment>
    )
}
export default Product;

