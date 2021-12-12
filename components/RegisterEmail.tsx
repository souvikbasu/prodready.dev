/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import Link from "next/link";

const SAVE_USER_SPOT = gql`
  mutation saveUserSpot($email: String, $date: String, $tz: String) {
    saveUserSpot(email: $email, date: $date, tz: $tz) {
      email
      date
      tz
    }
  }
`;

function RegisterEmail(): JSX.Element {
  const [saveUserSpot, { error }] = useMutation(SAVE_USER_SPOT, {
    errorPolicy: "all",
  });
  const [message, setMessage] = useState("");
  const [batch, setBatch] = useState({ date: "future", tz: "tbd" });
  const [email, setEmail] = useState("");

  const enrollEmail = () => {
    saveUserSpot({
      variables: { email: email, date: batch["date"], tz: batch["tz"] },
    });
    setMessage(
      "Congratulations! you have been enrolled into the workshop. I will send you further details as the dates near."
    );
    setEmail("");
  };

  return (
    <div className="max-w-lg md:max-w-2xl">
      <div className="w-full bg-graybg rounded p-5 sm:p-10 mt-20">
        <h2>Save my spot</h2>
        <div>
          <input
            type="radio"
            name="batch"
            onClick={() => setBatch({ date: "18-19 Dec 21", tz: "PST" })}
          ></input>
          <span className="text-md ml-2">
            18-19th Dec 2021 (10 am to 2 pm Pacific Time)
          </span>
          <div className="text-sm ml-6 mb-4 text-yellow">USD 39 | CAD 49</div>
        </div>

        <div>
          <input
            type="radio"
            name="batch"
            onClick={() => setBatch({ date: "18-19 Dec 21", tz: "IST" })}
          ></input>
          <span className="text-md ml-2">
            18-19th Dec 2021 (8 am to 12 noon Indian Standard Time)
          </span>
          <div className="text-sm ml-6 mb-4 text-yellow">INR 2000</div>
        </div>

        <div>
          <input
            type="radio"
            name="batch"
            onClick={() => setBatch({ date: "12-13 Feb 22", tz: "PST" })}
          ></input>
          <span className="text-md ml-2">
            12-13th Feb 2022 (10 am to 2 pm Pacific Time)
          </span>
          <div className="text-sm ml-6 mb-4 text-yellow">USD 39 | CAD 49</div>
        </div>

        <div>
          <input
            type="radio"
            name="batch"
            onClick={() => setBatch({ date: "12-13 Feb 22", tz: "IST" })}
          ></input>
          <span className="text-md ml-2">
            12-13th Feb 2022 (8 am to 12 noon Indian Standard Time)
          </span>
          <div className="text-sm ml-6 mb-4 text-yellow">INR 2000</div>
        </div>

        <div>
          <input
            type="radio"
            name="batch"
            onClick={() => setBatch({ date: "future", tz: "tbd" })}
          ></input>
          <span className="text-md ml-2">
            Keep me posted for future workshops
          </span>
        </div>
        <div className="flex flex-row mt-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-64 rounded-md p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={enrollEmail} className="ml-2">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterEmail;
