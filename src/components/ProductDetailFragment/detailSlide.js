import {Fragment,useState,useEffect} from 'react';
import beauty1 from "../../assets/beauty2.png";
import beauty2 from "../../assets/beauty1.png";

function DetailSlide(){
    const[DetailSliderContainer__slides,setDetailSliderContainer__slidesStyle]=useState()
    const[dots,setDots]=useState()
    const[slide,setSlide]=useState()
    let slideIndex=0;
    let interval='';

    
function showslide(){
    slideIndex++;
  
        if(slide){  
            console.log(slide)  
            if(slideIndex>slide.length){
                slideIndex=1; 
                //console.log(slide.length)
            }
            else if(slideIndex<1){  
                slideIndex=slide.length
                // console.log(slide.length)
            }
            for(let i=0; i<dots.length; i++){
                const element=dots[i];
                element.classList.remove("dot-active")
            }
            setDetailSliderContainer__slidesStyle({"left":`-${slideIndex-1}00%`})
            dots[slideIndex-1].classList.add("dot-active")
        }
    }
    function currentslide(index){

        for(let i=0; i<dots.length; i++){
            const element=dots[i];
            element.classList.remove("dot-active")
        }
    
        for(let i=0; i<dots.length; i++){
            const element=dots[i];
            element.classList.remove("dot-active")
        }
        console.log(`-${index-1}00%`)
        setDetailSliderContainer__slidesStyle({"left":`-${index-1}00%`})
        dots[index-1].classList.add("dot-active")
        slideIndex=index
    }
    useEffect(()=>{
        interval=window.setInterval(()=>{ showslide()},5000)
        let dots=document.querySelectorAll(".DetailSliderContainer__slides__dot span");
        let slide=document.querySelectorAll(".DetailSliderContainer__slides_slide");
        setDots(dots)
        setSlide(slide)
    },[])
    
    return(
        <Fragment >
              <div id="DetailSliderContainer" >
                <ul id="DetailSliderContainer__slides" style={DetailSliderContainer__slides}>
                    <li className="DetailSliderContainer__slides_slide">
                        <img src={beauty1}  alt="..."/>
                    </li>
                    <li className="DetailSliderContainer__slides_slide secondSlide">
                        <img src={beauty2}  alt="..."/>
                    </li>
                    <li className="DetailSliderContainer__slides_slide secondSlide">
                        <img src={beauty2}  alt="..."/>
                    </li>
                   
                </ul>
                <div className="DetailSliderContainer__slides__dot  DetailSliderContainer__slides__dots-M">
                        <span className="DetailSliderContainer__slides__dots" onClick={()=>currentslide(1)}></span>
                        <span className="DetailSliderContainer__slides__dots" onClick={()=>currentslide(2)}></span>
                        <span className="DetailSliderContainer__slides__dots" onClick={()=>currentslide(3)}></span>
                    </div>
            </div>
        </Fragment>
    )
}
export default DetailSlide;