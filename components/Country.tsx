import { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: "rgb(192,192,192)",
    color: "black",
    width: "40px",
    position: "fixed",
    height: "300px",
  },
  input: {
    color: "black",
    backgroundColor: "rgb(241 242 243)",
  },
}));

export default function Countries({ CalculateGST, formData, setFormData }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const classes = useStyles();

  const selectCountryHandler = (e) => {
    setSelectedCountry(e);
  };

  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);

  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  return (
    <div>
      <Select
        name="country"
        type="text"
        id="country"
        className="w-72 text-black"
        value={selectedCountry || formData.country}
        onChange={(e) => {
          selectCountryHandler(
            setFormData({ ...formData, country: e.target.value })
          );
          CalculateGST(e);
        }}
        MenuProps={{
          classes: {
            paper: classes.paper,
          },
        }}
        inputProps={{
          classes: {
            root: classes.input,
          },
        }}
      >
        {!!countryArr?.length &&
          countryArr.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
}
