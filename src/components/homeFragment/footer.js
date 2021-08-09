import {Fragment} from 'react';

function Footer(){
    return(
        <Fragment >
           <div className="FooterContainer FooterContainer-M">
                <ul className="FooterContainer__nav">
                    <li>HOME</li>
                    <li>STORES</li>
                    <li>CART</li>
                    <li>ACCOUNT</li>
                </ul>
            </div>
        </Fragment>
    )
}
export default Footer;