import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ totalPrice }: any) => {
  const priceForStripe = totalPrice;
  const publishableKey =
    "pk_test_51JyvqZSFWb1hhs6iXu6o7geRq7PrRQYyLzg99iyoqTA8cwK9ccI0sWFmp9mnX1sPlRBewzT9kA3Kc8IwtanApwIf00pR6tm02Y";

  const onToken = (token: any) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="React Workshop"
      description={`Your total is ₹${totalPrice}`}
      panelLabel={`Pay Now ₹${totalPrice}`}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;