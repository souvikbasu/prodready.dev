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
    <>
      <div className="justify-center w-screen md:w-6/12 2xl:w-3/12 lg:w-4/12 sm:w-9/12 mt-20">
        <h1 className="text-2xl">CSS can be fun. I promise.</h1>
        <p className="text-lg">
          For a lot of front-end developers, CSS is the most frustrating part of
          their work.
        </p>
        <p className="text-lg mt-5">
          When you make a mistake in Typescript, you get a helpful tooltip
          telling you exactly what you did wrong. In CSS, by contrast, you're
          left in the dark, without any clues about why you're not getting the
          result you expected.
        </p>
        <p className="text-lg mt-6">
          These constant bewildering surprises take us out of flow state, and
          shake our confidence. No wonder so many of us don't enjoy writing CSS!
        </p>
        <p className="text-lg mt-6">
          Despite all appearances, though, CSS is actually a deeply consistent
          and robust language. It feels unpredictable because there are complex
          systems involved, systems that are totally invisible to us.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-max md:w-9/12 2xl:w-4/12 lg:w-6/12 sm:w-10/12 bg-graybg rounded p-5 sm:p-10 mt-20"
      >
        <h2>Save my spot</h2>
        <h4>No payment needed as of now. Pay only once you confirm</h4>
        <div className="flex flex-row mt-4">
          <input
            type="text"
            name="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w)+@\w+([\.]?\w)+(\.[a-zA-Z]{2,3})+$/,
                message: "Please enter a valid email",
              },
            })}
            placeholder="Email"
            className="w-64 rounded-md p-2"
          />
          <button onSubmit={handleSubmit(submit)} className="ml-2 text-sm">
            <p className="w-16">Pay Later</p>
          </button>
          <Link href="/checkout">
            <button onSubmit={handleSubmit(submit)} className="ml-2 mr-4">
              Enroll
            </button>
          </Link>
        </div>
        {(error && <h1 className="text-red-400">{error.message}</h1>) ||
          (message && <h1 className="text-green-400">{message}</h1>) ||
          (errors?.email && (
            <h1 className="text-red-400">{errors.email.message}</h1>
          ))}
      </form>
      <div className="h-80 lg:h-1/2 mt-20 w-screen md:w-6/12 lg:w-3/12 sm:w-9/12 bg-white">
        <h1 className="mt-4 ml-4 h-4 font-bold text-xl text-blue-900">
          Frequently Asked Questions
        </h1>
        <h3 className="mt-9 ml-4 font-medium text-gray-600 text-lg">
          {">"} Difficulty in placing orders?
        </h3>
        <p className="mt-1 ml-4 font-medium text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus dui,
          scelerisque id orci vel, cursus commodo ante.
        </p>
        <h3 className="mt-3 ml-4 font-medium text-gray-600 text-lg">
          {">"} Shipping related queries?
        </h3>
        <p className="mt-1 ml-4 font-medium text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus dui,
          scelerisque id orci vel, cursus commodo ante.{" "}
        </p>
      </div>
    </>
  );
}

export default RegisterEmail;
