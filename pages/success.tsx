import React from "react";
import Footer from "../components/Footer/footer";

function Success() {
  return (
    <div className="bg-black h-screen w-full sm:w-full ">
      <div className="bg-black min-h-screen flex  justify-center items-center">
        <h1 className="font-black text-white text-4xl center">
          Your payment is successfull!
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Success;
