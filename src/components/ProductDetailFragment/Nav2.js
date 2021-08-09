import {Fragment,useState,useEffect} from 'react';

import "../../styles/detail.css"


function Nav2(props){
    const[HeaderTitle,setHeaderTitle]=useState()
    useEffect(async()=>{  
        setHeaderTitle(props.title)
    })
    return(
        <Fragment>
            <div id="Nav2">
                <h3>{HeaderTitle}</h3>
            </div>
        </Fragment>
    )
}
export default Nav2;