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
  const [values, setValues] = useState("");

  const { handleSubmit, register, errors } = useForm();

  const submit = ({ data, e }: any) => {
    saveUserSpot({ variables: { email: emailInput } });
    setMessage(
      "Congratulations! you have been enrolled into the workshop. I will send you further details as the dates near."
    );
    setValues("");
  };

  return (
    <>
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
        {error ? (
          <h1 className="text-red-400">{error.message}</h1>
        ) : (
          message && <h1 className="text-green-400">{message}</h1>
        )}
      </form>
    </>
  );
}

export default RegisterEmail;
