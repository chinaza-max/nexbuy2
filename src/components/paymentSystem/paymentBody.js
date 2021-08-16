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
          public_key: "FLWPUBK_TEST-13df3e9d9f08d0f5626aae7b1fd76e19-X",
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
            description: 'Payment for items in cart',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
          },
        })
    }
    else{
          setConfig({
            public_key: "FLWPUBK_TEST-13df3e9d9f08d0f5626aae7b1fd76e19-X",
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
              description: 'Payment for items in cart',
              logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
            },
          })
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
                window.alert("payment succeful")
                closePaymentModal() // this will close the modal programmatically
                history.push('/')
                //for updating cart
                console.log(props.itemNameP)
                if(props.itemNameP!==undefined){
                  console.log("yes")
                  let datas= JSON.parse(localStorage.getItem('data'))
                  let NewcartContent=datas.filter((obj)=>{
                      return props.itemNameP!==obj.description
                  })
                  localStorage.setItem('data', JSON.stringify(NewcartContent))
                }else{
                  localStorage.removeItem('data');
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