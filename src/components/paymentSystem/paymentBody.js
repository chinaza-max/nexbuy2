import React  from 'react';
import {useState} from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useHistory } from "react-router-dom";

function App(props) {
  let[config,setConfig]=useState(); 
  let history = useHistory();

  function UpdateAmount(){
    if(props.totalAmountP===undefined){
        let elementToDisplayAmount=document.querySelectorAll(".amountSingleItem")[props.indexP]
  
        setConfig({
          public_key: process.env.REACT_APP_FLUTTERWAVE_KEY,
          tx_ref: Date.now(),
          amount: parseInt(elementToDisplayAmount.innerHTML),
          currency: 'NGN',
          payment_options: 'card,mobilemoney,ussd',
          customer: {
            email: 'mosesogbonna68@gmail.com',
            phonenumber: '07064586146',
            name: 'joel ugwumadu',
          },
          customizations: {
            title: 'NEXBUY',
            description: 'Payment for all items in cart',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
          },
        })
    }
    else{
    
          setConfig({
            public_key: process.env.REACT_APP_FLUTTERWAVE_KEY,
            tx_ref: Date.now(),
            amount: props.totalAmountP,
            currency: 'NGN',
            payment_options: 'card,mobilemoney,ussd',
            customer: {
              email: 'user@gmail.com',
              phonenumber: '07064586146',
              name: 'joel ugwumadu',
            },
            customizations: {
              title: 'NEXBUY',
              description: `Payment of ${props.itemNameP}`,
              logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
            },
          })
    }
  }
  function updateCart(id){
    if(id==="emptyCart"){
      localStorage.removeItem("cartData");
    }
    else{
        let datas= JSON.parse(localStorage.getItem('cartData'))
        let NewcartContent=datas.filter((obj)=>{
          return id!==obj.id
        })

        localStorage.setItem('cartData', JSON.stringify(NewcartContent))//saves to the database, "key", "value";
    }
   // window.location.reload(false);
  }

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button style={{height:props.heightP,borderRadius:props.borderP}}
        onClick={() => {
          UpdateAmount()
          config===undefined?   UpdateAmount() :
          handleFlutterPayment({
            callback: (response) => {
              // console.log(response);   
                closePaymentModal() // this will close the modal programmatically
                history.replace('/Home/cart')
          
                if(response.status==="successful"){
                  updateCart(props.idP)
                }
            },
            onClose: () => {
              setConfig()
            },
          });
        }}
      >
        Payment 
      </button>
    </div>
  );
}
export default App;