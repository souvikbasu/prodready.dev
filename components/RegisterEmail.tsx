import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import validator from "validator";

const SAVE_USER_SPOT = gql`
  mutation save {
    saveUserSpot(email: "souvikbasu@gmail.com") {
      email
    }
  }
`;

function RegisterEmail(): JSX.Element {
  const [saveUser, { error }] = useMutation(SAVE_USER_SPOT);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  if (error) {
    throw new Error(`Request failed: ${error}`);
  }

  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setMessageError("Email is valid");
    } else {
      setMessageError("Please enter a valid email");
    }
  };

  const onSubmit = async () => {
    try {
      const data = await saveUser();
      if (data === null) {
        throw new Error("Request could not be completed.");
      }
      console.log(data);
      setMessage(
        "Congratulations! you have been enrolled into the workshop. I will send you further details as the dates near."
      );
    } catch (err) {
      alert(`Feedback submission failed with '${err}'! Tray again later.`);
    }
  };
  return (
    <>
      <div className="w-535 bg-graybg rounded p-10 mt-20">
        <h2>Save my spot</h2>
        <h4>No payment needed as of now. Pay only once you confirm</h4>
        <div className="flex flex-row mt-4">
          <input
            onChange={(e) => validateEmail(e)}
            type="text"
            placeholder="Email"
            className="bg-black pl-6"
          />
          <button onClick={onSubmit} className="ml-2">
            Enroll
          </button>
        </div>
        {(message && <h1 className="text-green-400">{message}</h1>) ||
          (messageError && <h1 className="text-red-400">{messageError}</h1>)}
      </div>
    </>
  );
}

export default RegisterEmail;
