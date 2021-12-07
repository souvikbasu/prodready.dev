import React from "react";
import StripeCheckout from "react-stripe-checkout";

function Payment({ formData }: any) {
  const totalPrice = 100;
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_KEY;

  const onToken = (token: any) => {
    alert("Payment Successful");
    console.log(formData);
  };
  return (
    <div className="flex justify-center">
      <section>
        <StripeCheckout
          label="Pay now"
          name="React Workshop"
          description={`Your total is USD${totalPrice}`}
          panelLabel={`Pay Now USD${totalPrice}`}
          token={onToken}
          stripeKey={publishableKey}
        >
          <button className="w-32 h-10 bg-buttonbg rounded text-white mt-64">
            Pay Now
          </button>
        </StripeCheckout>
      </section>
    </div>
  );
}

export default Payment;
