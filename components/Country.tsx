/* eslint-disable react/jsx-key */
import { useState } from "react";
import * as data from "../public/data/countries.json";

export default function Countries({ calculateGST, formData, setFormData }) {
  const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (e) => {
    setSelectedCountry(e);
  };

  return (
    <div>
      <select
        name="country"
        id="country"
        className="w-72 rounded ml-4 sm:ml-0 text-black"
        value={selectedCountry || formData.country || "United States"}
        onChange={(e) => {
          selectCountryHandler(
            setFormData({ ...formData, country: e.target.value })
          );
          calculateGST(e);
        }}
      >
        {data.map((country) => (
          <option className="text-black w-16 sm:w-32">{country.name}</option>
        ))}
      </select>
    </div>
  );
}
