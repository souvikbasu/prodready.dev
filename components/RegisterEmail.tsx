import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const SAVE_USER = gql`
  mutation save {
    saveUserSpot(email: "souvikbasu@gmail.com") {
      email
    }
  }
`;

function RegisterEmail(): JSX.Element {
  const [saveUser, { error }] = useMutation(SAVE_USER);
  const [message, setMessage] = useState("");

  if (error) {
    throw new Error(`Request failed: ${error}`);
  }

  const onSubmit = async () => {
    try {
      const data = await saveUser();
      if (data === null) {
        throw new Error("Request could not be completed.");
      }
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
          <input type="text" placeholder="Email" className="bg-black pl-6" />
          <button onClick={onSubmit} className="ml-2">
            Enroll
          </button>
        </div>
      </div>
      <h1 className="w-96 pt-6 text-gray-300">{message}</h1>
    </>
  );
}

export default RegisterEmail;
