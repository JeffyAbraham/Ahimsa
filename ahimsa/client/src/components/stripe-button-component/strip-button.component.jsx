import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I31soARMitNW1M5RJif6Jly1DDZN2xgjNb9hZ36M92l4MJPo2fgvtxy4Rtbgo3YrHecfU8M5nj9ChYfzzvcf2r400tNXCMhJ6";
 
 
    const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment SuccessFuk");
      })
      .catch((err)=>{
        console.log(err)
      });
  };
  
  
  return (
    <StripeCheckout
      label="Pay Now"
      name="Ahimsa"
      billingAddress
      shippingAddress
      description={`your total amount is$${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};
export default StripeButton;
