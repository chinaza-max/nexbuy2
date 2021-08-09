import {Fragment,useState,useEffect} from 'react';
import { Link } from "react-router-dom";



function Product(props){
    const[Products,setProducts]=useState([])
  

   

    const URL=`https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=${props.searchStringP}`
     useEffect(async()=>{  
      const controller = new AbortController()
      const signal = controller.signal
      try {
        let response=await fetch(URL,{signal}, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "b03b577e45mshb62f4d5ecbfae57p108324jsna07cb1377bb8",
                "x-rapidapi-host": "kohls.p.rapidapi.com"
          }
        })
        const json = await response.json();
        //setProducts(json.payload.products) 
      } catch (error) {
        console.error(error);
      }
      return function cleanUp(){
        controller.abort()
      }

    },[URL])
    let ProductsContent=Products.map((data,index)=>{
       
        return(
              <li key={data.image.url}>
                <Link className="productContainer__Link" to={"#"}>
                  <img  src={data.image.url} alt={data.altImageUrl}></img>
                </Link>
                <h5>djdj</h5>
                <p>{data.productTitle}</p>
                <div>
                  <span>{data.prices[0].regularPrice.minPrice}</span>
                  <span><Link className="productContainer__Link__cart" to={"#"}>cart</Link></span>
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