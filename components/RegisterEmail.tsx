import React from "react";

const RegisterEmail = () => {
  return (
    <div className="w-535 bg-graybg rounded p-10 mt-20">
      <h2>Save my spot</h2>
      <h4>No payment needed as of now. Pay only once you confirm</h4>
      <div className="flex flex-row mt-4">
        <input placeholder="Email" className=""></input>
        <button className="ml-2">Register</button>
      </div>
    </div>
  );
};

export default RegisterEmail;
