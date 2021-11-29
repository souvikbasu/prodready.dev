/* eslint-disable @next/next/link-passhref */
import React, { useState } from "react";
import Link from "next/link";
import Email from "./Email";
import Location from "./Location";
import Payment from "./Payment";

const CheckoutButton = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    postcode: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <Email formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Location formData={formData} setFormData={setFormData} />;
    } else {
      return <Payment />;
    }
  };
  return (
    <div className="sm:h-screen overflow-x-hidden w-max sm:w-full bg-black">
      <main className="grid sm:flex bg-black h-max sm:h-screen justify-center py-20 w-max sm:w-screen sm:py-36">
        <div className="ml-5 bg-white px-6 sm:px-10 py-4 w-11/12 sm:w-1/4 h-96 rounded-lg">
          <Link href="/">
            <button className="text-black bg-transparent">Home</button>
          </Link>
          <button
            className={`${
              page === 0
                ? "font-bold text-black bg-transparent"
                : "font-medium text-black bg-transparent"
            }`}
          >
            Email
          </button>
          <button
            className={`${
              page === 1
                ? "font-bold text-black bg-transparent"
                : "font-medium text-black bg-transparent"
            }`}
          >
            Location
          </button>
          <button
            className={`${
              page >= 2
                ? "font-bold text-black bg-transparent"
                : "font-medium text-black bg-transparent"
            }`}
          >
            Payment
          </button>
          <div>
            <section>{PageDisplay()}</section>
          </div>
          <div className="flex">
            <button
              disabled={page === 0}
              onClick={() => setPage((currPage) => currPage - 1)}
              type="submit"
              className="mt-6 w-48 bg-blue-900"
            >
              Back
            </button>
            <button
              onClick={() => {
                if (page >= 2) {
                  alert("Form submitted");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
              type="submit"
              className="ml-5 mt-6 w-48 bg-blue-900"
            >
              {page >= 2 ? "Submit" : "Continue"}
            </button>
          </div>
        </div>
        <div className="ml-10 mt-8 sm:mt-0 sm:ml-16 w-max sm:w-1/4">
          <h1 className="font-bold text-xl">Ultimate Package</h1>
          <p className="w-96 sm:w-11/12 text-gray-400 font-sm mt-8">
            Transform your relationship with CSS! This package includes all 10
            modules, along with a wealth of valuable bonus content.
          </p>
          <div className="flex justify-between border-dotted border-b-2 mt-6">
            <h2 className="font-normal text-base">Subtotal</h2>
            <h2 className="font-normal text-base">$349.00 USD</h2>
          </div>
          <div className="flex justify-between border-dotted border-b-2 mt-4">
            <h2 className="font-normal text-base">Sales Tax / VAT</h2>
            <h2 className="font-normal text-base">$62.82 USD</h2>
          </div>
          <div className="flex justify-between mt-4">
            <h2 className="font-normal text-base">Total Price</h2>
            <h2 className="font-normal text-base">$411.82 USD</h2>
          </div>
        </div>
      </main>
      <footer className="bg-black max-h-screen flex p-4 border-t-2 border-gray-100 justify-center items-center">
        <div className="text-sm text-graytext">
          © 2021 Souvik Basu. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default CheckoutButton;
