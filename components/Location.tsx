import React from "react";
import Countries from "./Country";
import { useForm } from "react-hook-form";

function Location({
  pin,
  page,
  setPage,
  calculateGST,
  formData,
  setFormData,
}: any) {
  const { handleSubmit, register, errors } = useForm();
  const submit = () => {
    setPage(page + 1);
  };
  var india = new RegExp(/^([1-9]{1})([0-9]{5})$/);
  var canada = new RegExp(/^([A-Z]\d[A-Z]\d[A-Z]\d)$/);
  var usa = new RegExp(/^([0-9]{5})(-[0-9]{4})?$/);
  return (
    <div>
      <section>
        <h1 className="text-black text-xl font-bold mt-4">
          Where are you located?
        </h1>
        <p className="w-96 text-black mt-3">
          Your location is used to calculate sales tax, if applicable.
        </p>
        <div className="mt-6 flex items-center">
          <h3 className="w-20 text-black text-sm font-medium mr-6">Country:</h3>
          <Countries
            calculateGST={calculateGST}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        <div className="mt-6 flex items-center">
          <h3 className="w-24 text-black text-sm font-medium mr-4">
            {pin || "Postcode"}:
          </h3>
          <input
            value={formData.postcode}
            onChange={(e) =>
              setFormData({ ...formData, postcode: e.target.value })
            }
            {...register({
              required: "Postcode is mandatory",
              pattern: {
                value: india || canada || usa,
                message: "Field is invalid",
              },
            })}
            className="-ml-2 rounded w-72"
            name="postcode"
            type="text"
          />
        </div>
        {errors?.postcode && (
          <h1 className="ml-28 text-sm text-red-500">
            {errors.postcode.message}
          </h1>
        )}
        <div className="-ml-4 flex mt-0">
          <button
            onClick={() => setPage((currPage) => currPage - 1)}
            className={`mt-6 font-normal text-sm bg-transparent rounded text-blue-600 px-4`}
          >
            Back
          </button>
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
        </div>
      </section>
    </div>
  );
}

export default Location;
