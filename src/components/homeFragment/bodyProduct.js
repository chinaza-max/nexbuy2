import {Fragment,useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import {ShoppingCartIcon,CircularIndeterminate,DescriptionAlerts} from "../icons";
import axios from "axios"

// <CheckCircleIcon style={{fontSize: 10 + 'px',color:'blue'}}/>


function Product(props){
    const[Products,setProducts]=useState([])
    const[error,setError]=useState()
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    function addToCart(title,description,url,color,amount,index,altUrl){
      let cartIcons=document.querySelectorAll(".cartIcons")
      cartIcons[index].style.display='none';
      //localStorage.removeItem('data')
      let datas= JSON.parse(localStorage.getItem('data'))
      if(datas){
       // console.log("chinaza")
       
        datas.push({title,description,url,color,amount,altUrl})
        localStorage.setItem('data', JSON.stringify(datas))
        props.cartCountP(datas.length)
      }
      else{
          datas=[];
          datas.push({title,description,url,color,amount,altUrl})
          localStorage.setItem('data', JSON.stringify(datas))
      }
      datas= JSON.parse(localStorage.getItem('data'))
     // console.log(datas)
    }

     useEffect(async()=>{  
      const cancelToken = axios.CancelToken;
      const source = cancelToken.source();
      //localStorage.removeItem('store');
      let datas=JSON.parse(localStorage.getItem('store'))
    
      if(datas){
          setProducts(datas)
      }
      else if(datas===null){
          var options = {
            method: 'GET',
            url: 'https://kohls.p.rapidapi.com/products/list',
            params: {limit: '24', offset: '1', dimensionValueID: 'AgeAppropriate:Teens'},
            headers: {
              'x-rapidapi-key':"69f6baf540msh59fede3476ee66dp18b5bajsn4a3041a37f2f",
              'x-rapidapi-host': 'kohls.p.rapidapi.com'
            }
          ,source
          };
          axios.request(options).then(function (response) {
            
            try {
              localStorage.setItem('store', JSON.stringify(response.data.payload.products))//saves to the database, "key", "value"
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
                    <li key={data.image.url}>
                      <Link className="productContainer__Link" to={"#"}>
                        <img  src={data.image.url} alt={data.altImageUrl}></img>
                      </Link>
                      <h5 aria-labelledby='product-title'>{data.productTitle.split(' ')[0]+" "+ data.productTitle.split(' ')[1]+" "}
                          <input type="checkbox" role="checkbox" aria-checked="false" className="check" />
                         </h5>
                      <p>{data.productTitle}</p>
                      <div>
                        <span>NGN{" "+data.prices[0].regularPrice.minPrice}</span>
                        <span aria-label="Add to Cart"  style={{color:'red'}} onClick={()=>{addToCart(data.productTitle.split(' ')[0]+" "+ data.productTitle.split(' ')[1],
                          data.productTitle,data.image.url,data.availableColr,data.prices[0].regularPrice.minPrice,index,data.altImageUrl)}}> <ShoppingCartIcon className="cartIcons"/></span>
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

