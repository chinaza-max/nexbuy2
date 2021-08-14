import {Fragment,useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import {ShoppingCartIcon,CheckCircleIcon,CircularIndeterminate,DescriptionAlerts} from "../icons";
import axios from "axios"



function Product(props){
    const[Products,setProducts]=useState([])
    const[error,setError]=useState()
  
    function addToCart(title,description,url,color,amount,index){
      let cartIcons=document.querySelectorAll(".cartIcons")
      cartIcons[index].style.display='none';
     
      //[index].classList.add("removeToCart")
      //localStorage.removeItem('data')
      let datas= JSON.parse(window.localStorage.getItem('data'))
      //console.log(datas)
      if(datas){
       // console.log("chinaza")
        datas.push({title,description,url,color,amount})
        window.localStorage.setItem('data', JSON.stringify(datas))
        props.cartCountP(datas.length)
      }
      else{
          datas=[];
          datas.push({title,description,url,color,amount})
          window.localStorage.setItem('data', JSON.stringify(datas))
      }
      datas= JSON.parse(window.localStorage.getItem('data'))
     // console.log(datas)
    }

     useEffect(async()=>{  
      const controller = new AbortController()
      const signal = controller.signal
      let datas=JSON.parse(window.localStorage.getItem('store'))
      if(datas){
          setProducts(datas)
      }
      else if(datas===null){
        console.log(process.env.REACT_APP_API_KEY)
          var options = {
            method: 'GET',
            url: 'https://kohls.p.rapidapi.com/products/list',
            params: {limit: '24', offset: '1', dimensionValueID: 'AgeAppropriate:Teens'},
            headers: {
              'x-rapidapi-key': `69f6baf540msh59fede3476ee66dp18b5bajsn4a3041a37f2f`,
              'x-rapidapi-host': 'kohls.p.rapidapi.com'
            }
          ,signal
          };
          axios.request(options).then(function (response) {
            
            try {
              window.localStorage.setItem('store', JSON.stringify(response.data.payload.products))//saves to the database, "key", "value"
              datas=JSON.parse(window.localStorage.getItem('store'))
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
          return function cleanUp(){
            controller.abort()
          }
      }
  
     
   
    },[error])
    let ProductsContent=Products.map((data,index)=>{
                console.log(data.productTitle.indexOf(props.searchStringP)===-1)
                if(data.productTitle.toLowerCase().indexOf(props.searchStringP.toLowerCase())===-1){
                  return ' '
                }
                else{
                  return(
                    <li key={data.image.url}>
                      <Link className="productContainer__Link" to={"#"}>
                        <img  src={data.image.url} alt={data.altImageUrl}></img>
                      </Link>
                      <h5>{data.productTitle.split(' ')[0]+" "+ data.productTitle.split(' ')[1]}
                         <CheckCircleIcon style={{fontSize: 10 + 'px',color:'blue'}}/></h5>
                      <p>{data.productTitle}</p>
                      <div>
                        <span>{data.prices[0].regularPrice.minPrice}</span>
                        <span  style={{color:'red'}} onClick={()=>{addToCart(data.productTitle.split(' ')[0]+" "+ data.productTitle.split(' ')[1],
                          data.productTitle,data.image.url,data.availableColr,data.prices[0].regularPrice.minPrice,index)}}> <ShoppingCartIcon className="cartIcons"/></span>
                      </div>
                    </li>
                  )
                }
    })
    return(
    
        <Fragment >
            <ul id="productContainer">   
                  {Products!==""? ProductsContent :error?<DescriptionAlerts errorp={error}/>:<CircularIndeterminate/>} 
            </ul>
        </Fragment>
    )
}
export default Product;

/*



const funRef = useRef(null);

//...

useEffect(() => {
    funRef.current = setInterval(() => {
      refreshSave();
    }, 3000);
    return () => {
     clearInterval(funRef.current);
    };
  }, []);*/ 