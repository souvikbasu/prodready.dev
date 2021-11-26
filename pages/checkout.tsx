import React from "react";
import StripeCheckoutButton from "../components/stripebutton";

function Checkout() {
  const totalPrice = 100;

  return (
    <div>
      <StripeCheckoutButton totalPrice={totalPrice} />
    </div>
  );
}

export default Checkout;
