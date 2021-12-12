/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import Link from "next/link";

const SAVE_USER_SPOT = gql`
  mutation saveUserSpot($email: String) {
    saveUserSpot(email: $email) {
      email
    }
  }
`;

function RegisterEmail(): JSX.Element {
  const [saveUserSpot, { error }] = useMutation(SAVE_USER_SPOT, {
    errorPolicy: "all",
  });
  const [message, setMessage] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const { handleSubmit, register, errors } = useForm();

  const submit = () => {
    saveUserSpot({ variables: { email: emailInput } });
    setMessage(
      "Congratulations! you have been enrolled into the workshop. I will send you further details as the dates near."
    );
    setEmailInput("");
  };

  return (
    <div className="max-w-lg md:max-w-2xl">
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full bg-graybg rounded p-5 sm:p-10 mt-20"
      >
        <h2>Save my spot</h2>
        <div>
          <input type="radio"></input>
          <span className="text-md ml-2">
            18-19th Dec 2021 (10 am to 2 pm Pacific Time)
          </span>
          <div className="text-sm ml-6 mb-4 text-yellow">USD 39 | CAD 49</div>
        </div>

        <div>
          <input type="radio"></input>
          <span className="text-md ml-2">
            18-19th Dec 2021 (8 am to 12 noon Indian Standard Time)
          </span>
          <div className="text-sm ml-6 mb-4 text-yellow">INR 2000</div>
        </div>

        <div>
          <input type="radio"></input>
          <span className="text-md ml-2">
            12-13th Feb 2022 (10 am to 2 pm Pacific Time)
          </span>
          <div className="text-sm ml-6 mb-4 text-yellow">USD 39 | CAD 49</div>
        </div>

        <div>
          <input type="radio"></input>
          <span className="text-md ml-2">
            12-13th Feb 2022 (8 am to 12 noon Indian Standard Time)
          </span>
          <div className="text-sm ml-6 mb-4 text-yellow">INR 2000</div>
        </div>

        <div>
          <input type="radio"></input>
          <span className="text-md ml-2">
            Keep me posted for future workshops
          </span>
        </div>
        <div className="flex flex-row mt-4">
          <input
            type="email"
            name="email"
            value={emailInput}
            placeholder="Email"
            className="w-64 rounded-md p-2"
          />
          <Link href={{ pathname: "/checkout", query: { emailInput } }}>
            <button className="ml-2 mr-4">Enroll</button>
          </Link>
        </div>
        {(error && <h1 className="text-red-400">{error.message}</h1>) ||
          (message && <h1 className="text-green-400">{message}</h1>) ||
          (errors?.email && (
            <h1 className="text-red-400">{errors.email.message}</h1>
          ))}
      </form>
    </div>
  );
}

export default RegisterEmail;
