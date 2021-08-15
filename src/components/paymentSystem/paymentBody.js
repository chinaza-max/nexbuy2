import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

function App(props) {
  const config = {
    public_key: "FLWPUBK-7922ff07110f011e4ae4211f9b172c2e-X",
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
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button style={{height:props.heightP,borderRadius:props.borderP}}
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Payment 
      </button>
    </div>
  );
}
export default App;