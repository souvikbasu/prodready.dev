import React from "react";
import { useForm } from "react-hook-form";

function Email({ page, setPage, formData, setFormData }: any) {
  const { handleSubmit, register, errors } = useForm();

  const submit = () => {
    setPage(page + 1);
  };
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
            className="text-input w-72"
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
        </form>
        {errors?.email && (
          <h1 className="ml-20 text-red-500">{errors.email.message}</h1>
        )}
        <button
          onClick={handleSubmit(submit)}
          type="button"
          className={`${page === 1 ? "ml-10" : "ml-5"} ${
            page >= 2 ? "hidden" : "block"
          } ${page <= 0 ? "-ml-0" : "-ml-0"}
            mt-6 w-48 h-10 bg-buttonbg rounded text-white px-4`}
        >
          Continue
        </button>
      </section>
    </div>
  );
}

export default Email;
