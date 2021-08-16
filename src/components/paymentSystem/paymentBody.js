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
        console.log(process.env.REACT_APP_FLUTTERWAVE_KEY)
        console.log("process.env.REACT_APP_FLUTTERWAVE_KEY")
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
            description: `Payment for${" "+props.itemNameP}`,
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
          },
        })
    }
    else{
          setConfig({
            public_key:process.env.REACT_APP_FLUTTERWAVE_KEY,
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
              description:"Payment for all item in cart" ,
              logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
            },
          })
    }
  }

  function checkPaidItem(){
    if(props.itemNameP!==undefined){
      document.querySelectorAll(".check")[props.indexP].checked=true
    }   
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
               console.log(response);
                checkPaidItem()
                closePaymentModal() // this will close the modal programmatically
    
              
                history.push('/Home/cart')
               
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