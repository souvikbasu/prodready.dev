/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [saveUserSpot, { error }] = useMutation(SAVE_USER_SPOT, {
    errorPolicy: "all",
  });
  const [batch, setBatch] = useState({ date: "18-19th Dec `21", tz: "PST" });
  const [email, setEmail] = useState("");

  const enrollEmail = () => {
    saveUserSpot({
      variables: { email: email, date: batch["date"], tz: batch["tz"] },
    });

    setEmail("");
    router.push({
      pathname: "/enrolled",
      query: {
        date: batch["date"],
        tz: batch["tz"],
        email,
        enrolled: !error,
        error: error?.message,
      },
    });
  };

  return (
    <div className="w-full md:max-w-2xl">
      <div className="w-full bg-graybg rounded p-5 sm:p-10 mt-20">
        <h2>Save my spot</h2>

        <div>
          <input
            type="radio"
            name="batch"
            onClick={() => setBatch({ date: "12-13th Feb `22", tz: "PST" })}
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
            onClick={() => setBatch({ date: "12-13th Feb `22", tz: "IST" })}
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
        <div className="flex flex-col sm:flex-row mt-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full sm:w-64 rounded-md p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={enrollEmail} className="mt-2 sm:mt-0 sm:ml-2">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterEmail;
