import React from "react";
import { useForm } from "react-hook-form";

function Email({ formData, setFormData }: any) {
  const { register, errors } = useForm();
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
        <form className="mt-6 flex items-center">
          <h3 className="text-black font-medium mr-6">Email:</h3>
          <input
            className="text-input rounded w-72"
            name="email"
            type="text"
            placeholder="name@domain.com"
            value={formData.email}
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w)+@\w+([\.]?\w)+(\.[a-zA-Z]{2,3})+$/,
                message: "Please enter a valid email",
              },
            })}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors?.email && (
            <h1 className="text-red-400">{errors.email.message}</h1>
          )}
        </form>
      </section>
    </div>
  );
}

export default Email;
