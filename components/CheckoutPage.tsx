import React, { useState } from "react";
import Email from "./Email";
import Footer from "./Footer/footer";
import Location from "./Location";
import Payment from "./Payment";
import { data } from "../public/data/data.json";

const CheckoutPage = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    postcode: "",
  });
  const [price, setPrice] = useState(0);
  const [gst, setGst] = useState(0);
  const [currency, setCurrency] = useState("$");
  const [pin, setPin] = useState("");
  const [total, setTotal] = useState(0);
  let OthValue = 99.0;
  let OthGSTValue = 0;

  const CalculateGST = (e) => {
    let found = data.find((item) => item.title === e.target.value);
    if (found) {
      setPrice(found.value);
      setGst(found.gst);
      setCurrency(found.currency);
      setPin(found.postal);
      setTotal(found.value * found.gst + found.value);
    } else {
      setPrice(OthValue);
      setGst(OthGSTValue);
      setCurrency(currency);
      setTotal(OthValue);
      setPin("");
    }
  };

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Email
          page={page}
          setPage={setPage}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 1) {
      return (
        <Location
          pin={pin}
          page={page}
          setPage={setPage}
          CalculateGST={CalculateGST}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else {
      return <Payment formData={formData} />;
    }
  };
  return (
    <div className="sm:h-screen overflow-x-hidden w-max sm:w-full bg-black">
      <div className="grid sm:flex bg-black h-max sm:h-screen justify-center py-20 w-max sm:w-screen sm:py-36">
        <div className="ml-5 bg-white px-6 sm:px-10 py-4 w-11/12 md:w-max lg:w-max sm:w-max h-96 rounded-lg">
          <div className="flex items-center">
            <button
              className={`${
                page === 0
                  ? "flex items-center -ml-4 font-bold text-black bg-transparent"
                  : "flex items-center -ml-4 font-medium text-black bg-transparent"
              }`}
            >
              Email
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="black"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              className={`${
                page === 1
                  ? "flex items-center font-bold text-black bg-transparent"
                  : "flex items-center font-medium text-black bg-transparent"
              }`}
            >
              Location
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="black"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
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
          </div>
          <div>
            <section>{PageDisplay()}</section>
          </div>
          <div className="flex mt-6">
            <button
              onClick={() => setPage((currPage) => currPage - 1)}
              type="submit"
              className={`${page >= 2 ? "-ml-4 -mt-16" : "-ml-4"} ${
                page === 0 ? "hidden" : "block"
              }
              ${
                page === 1 ? "hidden" : "block"
              } mt-6 font-normal text-sm bg-transparent rounded text-blue-600 px-4`}
            >
              Back
            </button>
            <button
              onClick={() => {
                if (page >= 2) {
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
              type="submit"
              className={`${page === 1 ? "ml-10" : "ml-5"} ${
                page >= 2 ? "hidden" : "block"
              } ${page <= 0 ? "hidden" : "block"}
              } ${page === 1 ? "hidden" : "block"}
              mt-6 w-48 h-10 bg-buttonbg rounded text-white px-4`}
            >
              Continue
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
            <h2 className="font-normal text-base">
              {currency}&nbsp; {price}
            </h2>
          </div>
          <div className="flex justify-between border-dotted border-b-2 mt-4">
            <h2 className="font-normal text-base">Sales Tax / VAT</h2>
            <h2 className="font-normal text-base">{gst}%</h2>
          </div>
          <div className="flex justify-between mt-4">
            <h2 className="font-normal text-base">Total Price</h2>
            <h2 className="font-normal text-base">
              {currency}&nbsp;
              {total}
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
