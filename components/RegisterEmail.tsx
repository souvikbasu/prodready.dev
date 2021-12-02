/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

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
      <div className="justify-center w-2/6 mt-20">
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
        className="w-535 bg-graybg rounded p-10 mt-20"
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
          />
          <button onSubmit={handleSubmit(submit)} className="ml-2">
            Enroll
          </button>
        </div>
        {(error && <h1 className="text-red-400">{error.message}</h1>) ||
          (message && <h1 className="text-green-400">{message}</h1>) ||
          (errors?.email && (
            <h1 className="text-red-400">{errors.email.message}</h1>
          ))}
      </form>
      <div className="mt-20 w-2/6 bg-white">
        <h1 className="mt-8 ml-6 h-10 font-bold text-2xl text-blue-900">
          Frequently Asked Questions
        </h1>
        <h3 className="mt-6 ml-6 font-medium text-gray-600 text-xl">
          {">"} Difficulty in placing orders?
        </h3>
        <p className="mt-5 ml-6 font-medium text-lg text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus dui,
          scelerisque id orci vel, cursus commodo ante.
        </p>
        <h3 className="mt-6 ml-6 font-medium text-gray-600 text-xl">
          {">"} Shipping related queries?
        </h3>
        <p className="mt-5 ml-6 font-medium text-lg text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus dui,
          scelerisque id orci vel, cursus commodo ante.{" "}
        </p>
        <button className="mt-2 w-36 h-10 bg-transparent text-lg text-blue-800">
          View All
        </button>
        <button className="h-10 text-lg left-96 bg-transparent text-blue-900">
          Any more questions? Talk to us {"-->"}
        </button>
      </div>
    </>
  );
}

export default RegisterEmail;
