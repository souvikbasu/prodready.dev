import React from "react";

function Email({ formData, setFormData }: any) {
  return (
    <div>
      <section>
        <h1 className="text-black text-xl font-bold mt-8">
          Complete your purchase
        </h1>
        <p className="w-96 text-black mt-5">
          To get started, please enter your email. Your email will be used to
          create an account on my course platform.
        </p>
        <div className="mt-6 flex items-center">
          <h3 className="text-black font-medium mr-10">Email:</h3>
          <input
            className="text-input rounded w-72"
            name="email"
            type="text"
            placeholder="name@domain.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
      </section>
    </div>
  );
}

export default Email;
