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
      <div className="justify-center w-screen md:w-6/12 2xl:w-4/12 lg:w-5/12 sm:w-9/12 mt-20">
        <h1 className="text-2xl">
          Still feel nervous to deploy a React app to Prod?
        </h1>
        <p className="text-lg">
          As I talk to more and more developers who are either students, working
          as interns, or even working as full-time employees of big
          organizations, I see that there is a gap in understanding of how to
          deploy a professional-grade React app in production. Indeed your React
          app works fine on localhost but before deploying your app to prod,
          have you given a thought to
        </p>
        <p className="text-lg mt-5">
          <ul>
            <li>How to load your app in under a second?</li>
            <li>
              How to profile your app to discover performance bottlenecks?
            </li>
            <li>How to cache your images?</li>
            <li>Rank your page on Google/Bing first page?</li>
            <li>How to debug an issue when reported by your customer?</li>
            <li>How to split your modules well to reduce payload size?</li>
            <li>Tune your webserver to compress responses?</li>
            <li>Take care of security to tackle malicious attacks?</li>
            <li>How to authenticate your users?</li>
            <li>Take care of GDPR and Privacy law compliance?</li>
            <li>
              Testing your app cross-browser and across different display sizes?
            </li>
            <li>Manage application state</li>
            <li>Styling strategy?</li>
            <li>Internationalization?</li>
            <li>Accessibility?</li>
            <li>CI/CD pipeline?</li>
            <li>Deployment strategies?</li>
            <li>Analyzing users' behavior on the site?</li>
            <li>Perform A/B testing?</li>
            <li>Handle scale?</li>
          </ul>
        </p>
        <p className="text-lg mt-6">
          If these points (and more such concerns) feel valid to you then I am
          thinking to take a 2-day interactive workshop to teach "React in
          Production". I am working on an online course as well to cover these
          topics. This workshop will also help me to understand gaps in my
          course to cover the needed topics. I recently gave a talk on React
          Global Summit (Online) touching on a few of these factors. Considering
          that most people have enough time to upskill themselves in the
          begining of the year, I am planning to take the workshop on 12-13th
          Feb.
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
            type="email"
            name="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            {...register({
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
    </>
  );
}

export default RegisterEmail;
