import {useEffect,Fragment} from 'react';
 
function BodyNav(){

    return(
        <Fragment >
           <div className="BodyNavContainer BodyNavContainer-M">
                <ul id="BodyNavContainer__nav">
                    <li> <span id="BodyNavContainer__nav__1"></span><h3>For You</h3></li>
                    <li> <span id="BodyNavContainer__nav__2"></span> <h3>Trending</h3></li>
                    <li> <span id="BodyNavContainer__nav__3"></span><h3>Categories</h3></li>
                    <li> <span id="BodyNavContainer__nav__4"></span><h3>Early Access</h3></li>
                </ul>
            </div>
        </Fragment>
    )
}
export default BodyNav;