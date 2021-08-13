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
      console.log(process.env.REACT_APP_API_KEY)
      var options = {
        method: 'GET',
        url: 'https://kohls.p.rapidapi.com/products/list',
        params: {limit: '12', offset: '1', dimensionValueID: 'AgeAppropriate:Teens'},
        headers: {
          'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
          'x-rapidapi-host': 'kohls.p.rapidapi.com'
        }
      ,signal
      };
      //d1963bf5fbmshda845f5b88cc44dp1f9178jsn5b20b7c1ea6f
      //3942ebb38emsh3de9dd6c09cab3cp1118a8jsne7e9cefbb396
     /* axios.request(options).then(function (response) {

        setProducts(response.data.payload.products)
      }).catch(function (error) {

           setError(JSON.stringify(error.response.data.message))
      });*/
      return function cleanUp(){
        controller.abort()
      }
    },[error,Products])
    let ProductsContent=Products.map((data,index)=>{
       
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
    })
    return(
    
        <Fragment >
            <ul id="productContainer">   
                  {Products!=""? ProductsContent :error?<DescriptionAlerts errorp={error}/>:<CircularIndeterminate/>} 
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