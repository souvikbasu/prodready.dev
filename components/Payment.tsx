import React from "react";
import StripeCheckout from "react-stripe-checkout";

function Payment() {
  const totalPrice = 100;
  const publishableKey = process.env.PUBLISHABLE_KEY;

  const onToken = (token: any) => {
    alert("Payment Successful");
  };
  return (
    <div className="flex justify-center my-24">
      <section>
        <StripeCheckout
          label="Pay now"
          name="React Workshop"
          description={`Your total is USD${totalPrice}`}
          panelLabel={`Pay Now USD${totalPrice}`}
          token={onToken}
          stripeKey={publishableKey}
        >
          <button className="w-32 h-10 bg-buttonbg rounded text-white px-4">
            Pay Now
          </button>
        </StripeCheckout>
      </section>
    </div>
  );
}

export default Payment;
