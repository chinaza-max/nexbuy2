import {Fragment,useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import {ShoppingCartIcon,CheckCircleIcon} from "../icons";
import axios from "axios"


function Product(props){
    const[Products,setProducts]=useState([])

    function addToCart(title,description,url,color,amount){
      //localStorage.removeItem('data')
      let datas= JSON.parse(localStorage.getItem('data'))
      //console.log(datas)
      if(datas){
       // console.log("chinaza")
        datas.push({title,description,url,color,amount})
        localStorage.setItem('data', JSON.stringify(datas))
      }
      else{
         // console.log("moses")
          datas=[];
          datas.push({title,description,url,color,amount})
          localStorage.setItem('data', JSON.stringify(datas))
      }
      datas= JSON.parse(localStorage.getItem('data'))
     // console.log(datas)
    }
 
  
   
  
     useEffect(async()=>{  
      const controller = new AbortController()
      const signal = controller.signal
      var options = {
        method: 'GET',
        url: 'https://kohls.p.rapidapi.com/products/list',
        params: {limit: '12', offset: '1', dimensionValueID: 'AgeAppropriate:Teens'},
        headers: {
          'x-rapidapi-key': '3942ebb38emsh3de9dd6c09cab3cp1118a8jsne7e9cefbb396',
          'x-rapidapi-host': 'kohls.p.rapidapi.com'
        }
      ,signal
      };
      
      /*axios.request(options).then(function (response) {
        setProducts(response.data.payload.products) 
      }).catch(function (error) {
        console.error(error);
      });*/
      return function cleanUp(){
        controller.abort()
      }
    },)
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
                  <span style={{color:'red'}} onClick={()=>{addToCart(data.productTitle.split(' ')[0]+" "+ data.productTitle.split(' ')[1],
                    data.productTitle,data.image.url,data.availableColr,data.prices[0].regularPrice.minPrice)}} ><ShoppingCartIcon/></span>
                </div>
              </li>
        )
    })
    return(
        <Fragment >
            <ul id="productContainer">    
                  {ProductsContent}
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