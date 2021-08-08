import {Fragment,useState,useEffect} from 'react';
import beauty1 from "../../assets/beauty2.png";
import beauty2 from "../../assets/beauty1.png";
 
function BodySlide(){
    const[sliderContainer__slides,setSliderContainer__slides]=useState({"left":"0px"})

    let interval; 
    function  showslide(){
        let value=document.getElementById("sliderContainer__slides").style.left;
            if(value==="0px"){
                setSliderContainer__slides({"left":"-100%"})
            }
            else if(value==="-100%"){
                setSliderContainer__slides({"left":"0px"})
            }
    }
    function Myloop(){
        interval=window.setInterval(()=>{
           showslide();
        
        },3000)
    }
    useEffect(()=>{
        Myloop();
        return () => {
            window.clearInterval(interval);
          };
    },[])
    return(
        <Fragment >
           <div className="sliderContainer sliderContainer-M" >
                <ul id="sliderContainer__slides" style={sliderContainer__slides}>
                    <li className="sliderContainer__slides_slide">
                        <h3 className="">@STYLEWITHDIVAS</h3>
                        <img src={beauty1} className="d-block w-100" alt="..."/>
                    </li>
                    <li className="sliderContainer__slides_slide secondSlide">
                        <h3 className="secondSlide__ALL">ALL FROM </h3>
                        <h3 className="secondSlide__NEXSHALES"> NEXSHALES!</h3>
                        <img src={beauty2} className="d-block w-100" alt="..."/>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}
export default BodySlide;