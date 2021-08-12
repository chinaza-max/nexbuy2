import {Fragment,useState,useEffect} from 'react';
import {ArrowBackIcon} from "../icons"
import "../../styles/detail.css"


function Nav2(props){
    const[HeaderTitle,setHeaderTitle]=useState()
    useEffect(async()=>{  
        setHeaderTitle(props.title)
    })
    function  goBack(){
        props.history.goBack()
    }
    return(
        <Fragment>
            <div id="Nav2">
                <span id="Nav2__arrow" onClick={goBack}>
                    <ArrowBackIcon style={{fontSize: 34 + 'px'}}/>
                </span>
                <span id="Nav2__title">
                    <h3>{HeaderTitle}</h3>
                </span>
               
            </div>
        </Fragment>
    )
}
export default Nav2;