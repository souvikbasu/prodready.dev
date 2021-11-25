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
  const [saveUserSpot, { error }] = useMutation(SAVE_USER_SPOT);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const { handleSubmit, register, errors } = useForm();

  const submit = (data: any) => {
    saveUserSpot({ variables: { email: emailInput } });
    setMessage(
      "Congratulations! you have been enrolled into the workshop. I will send you further details as the dates near."
    );
  };

  const onSubmit = async () => {
    try {
      const data = await saveUserSpot();
      if (data === null) {
        throw new Error("Request could not be completed.");
      }
    } catch (err) {
      setMessage("Email already exist!");
    }
  };
  if (error) return <div>Error! ${error.message}</div>;
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
          <button onClick={onSubmit} className="ml-2">
            Enroll
          </button>
        </div>
        {(errors?.email && (
          <h1 className="text-red-400">{errors.email.message}</h1>
        )) ||
          (message && <h1 className="text-green-400">{message}</h1>)}
      </form>
    </>
  );
}

export default RegisterEmail;
