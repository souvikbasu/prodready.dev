import { useState } from "react";

export default function Countries({ CalculateGST, formData, setFormData }) {
  const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (e) => {
    setSelectedCountry(e);
  };

  return (
    <div>
      <select
        name="country"
        id="country"
        className="w-72 ml-4 sm:ml-0 text-black"
        value={selectedCountry || formData.country}
        onChange={(e) => {
          selectCountryHandler(
            setFormData({ ...formData, country: e.target.value })
          );
          CalculateGST(e);
        }}
      >
        <option className="text-black text-md" value="Afghanistan">
          Afghanistan
        </option>
        <option className="text-black text-md" value="Albania">
          Albania
        </option>
        <option className="text-black text-md" value="Algeria">
          Algeria
        </option>
        <option className="text-black text-md" value="American Samoa">
          American Samoa
        </option>
        <option className="text-black text-md" value="Andorra">
          Andorra
        </option>
        <option className="text-black text-md" value="Angola">
          Angola
        </option>
        <option className="text-black text-md" value="Anguilla">
          Anguilla
        </option>
        <option className="text-black text-md" value="Antartica">
          Antarctica
        </option>
        <option className="text-black text-md" value="Antigua and Barbuda">
          Antigua and Barbuda
        </option>
        <option className="text-black text-md" value="Argentina">
          Argentina
        </option>
        <option className="text-black text-md" value="Armenia">
          Armenia
        </option>
        <option className="text-black text-md" value="Aruba">
          Aruba
        </option>
        <option className="text-black text-md" value="Australia">
          Australia
        </option>
        <option className="text-black text-md" value="Austria">
          Austria
        </option>
        <option className="text-black text-md" value="Azerbaijan">
          Azerbaijan
        </option>
        <option className="text-black text-md" value="Bahamas">
          Bahamas
        </option>
        <option className="text-black text-md" value="Bahrain">
          Bahrain
        </option>
        <option className="text-black text-md" value="Bangladesh">
          Bangladesh
        </option>
        <option className="text-black text-md" value="Barbados">
          Barbados
        </option>
        <option className="text-black text-md" value="Belarus">
          Belarus
        </option>
        <option className="text-black text-md" value="Belgium">
          Belgium
        </option>
        <option className="text-black text-md" value="Belize">
          Belize
        </option>
        <option className="text-black text-md" value="Benin">
          Benin
        </option>
        <option className="text-black text-md" value="Bermuda">
          Bermuda
        </option>
        <option className="text-black text-md" value="Bhutan">
          Bhutan
        </option>
        <option className="text-black text-md" value="Bolivia">
          Bolivia
        </option>
        <option className="text-black text-md" value="Bosnia and Herzegowina">
          Bosnia and Herzegowina
        </option>
        <option className="text-black text-md" value="Botswana">
          Botswana
        </option>
        <option className="text-black text-md" value="Bouvet Island">
          Bouvet Island
        </option>
        <option className="text-black text-md" value="Brazil">
          Brazil
        </option>
        <option
          className="text-black text-md"
          value="British Indian Ocean Territory"
        >
          British Indian Ocean Territory
        </option>
        <option className="text-black text-md" value="Brunei Darussalam">
          Brunei Darussalam
        </option>
        <option className="text-black text-md" value="Bulgaria">
          Bulgaria
        </option>
        <option className="text-black text-md" value="Burkina Faso">
          Burkina Faso
        </option>
        <option className="text-black text-md" value="Burundi">
          Burundi
        </option>
        <option className="text-black text-md" value="Cambodia">
          Cambodia
        </option>
        <option className="text-black text-md" value="Cameroon">
          Cameroon
        </option>
        <option className="text-black text-md" value="Canada">
          Canada
        </option>
        <option className="text-black text-md" value="Cape Verde">
          Cape Verde
        </option>
        <option className="text-black text-md" value="Cayman Islands">
          Cayman Islands
        </option>
        <option className="text-black text-md" value="Central African Republic">
          Central African Republic
        </option>
        <option className="text-black text-md" value="Chad">
          Chad
        </option>
        <option className="text-black text-md" value="Chile">
          Chile
        </option>
        <option className="text-black text-md" value="China">
          China
        </option>
        <option className="text-black text-md" value="Christmas Island">
          Christmas Island
        </option>
        <option className="text-black text-md" value="Cocos Islands">
          Cocos (Keeling) Islands
        </option>
        <option className="text-black text-md" value="Colombia">
          Colombia
        </option>
        <option className="text-black text-md" value="Comoros">
          Comoros
        </option>
        <option className="text-black text-md" value="Congo">
          Congo
        </option>
        <option className="text-black text-md" value="Congo">
          Congo, the Democratic Republic of the
        </option>
        <option className="text-black text-md" value="Cook Islands">
          Cook Islands
        </option>
        <option className="text-black text-md" value="Costa Rica">
          Costa Rica
        </option>
        <option className="text-black text-md" value="Cota D'Ivoire">
          Cote d{`'`}Ivoire
        </option>
        <option className="text-black text-md" value="Croatia">
          Croatia (Hrvatska)
        </option>
        <option className="text-black text-md" value="Cuba">
          Cuba
        </option>
        <option className="text-black text-md" value="Cyprus">
          Cyprus
        </option>
        <option className="text-black text-md" value="Czech Republic">
          Czech Republic
        </option>
        <option className="text-black text-md" value="Denmark">
          Denmark
        </option>
        <option className="text-black text-md" value="Djibouti">
          Djibouti
        </option>
        <option className="text-black text-md" value="Dominica">
          Dominica
        </option>
        <option className="text-black text-md" value="Dominican Republic">
          Dominican Republic
        </option>
        <option className="text-black text-md" value="East Timor">
          East Timor
        </option>
        <option className="text-black text-md" value="Ecuador">
          Ecuador
        </option>
        <option className="text-black text-md" value="Egypt">
          Egypt
        </option>
        <option className="text-black text-md" value="El Salvador">
          El Salvador
        </option>
        <option className="text-black text-md" value="Equatorial Guinea">
          Equatorial Guinea
        </option>
        <option className="text-black text-md" value="Eritrea">
          Eritrea
        </option>
        <option className="text-black text-md" value="Estonia">
          Estonia
        </option>
        <option className="text-black text-md" value="Ethiopia">
          Ethiopia
        </option>
        <option className="text-black text-md" value="Falkland Islands">
          Falkland Islands (Malvinas)
        </option>
        <option className="text-black text-md" value="Faroe Islands">
          Faroe Islands
        </option>
        <option className="text-black text-md" value="Fiji">
          Fiji
        </option>
        <option className="text-black text-md" value="Finland">
          Finland
        </option>
        <option className="text-black text-md" value="France">
          France
        </option>
        <option className="text-black text-md" value="France Metropolitan">
          France, Metropolitan
        </option>
        <option className="text-black text-md" value="French Guiana">
          French Guiana
        </option>
        <option className="text-black text-md" value="French Polynesia">
          French Polynesia
        </option>
        <option
          className="text-black text-md"
          value="French Southern Territories"
        >
          French Southern Territories
        </option>
        <option className="text-black text-md" value="Gabon">
          Gabon
        </option>
        <option className="text-black text-md" value="Gambia">
          Gambia
        </option>
        <option className="text-black text-md" value="Georgia">
          Georgia
        </option>
        <option className="text-black text-md" value="Germany">
          Germany
        </option>
        <option className="text-black text-md" value="Ghana">
          Ghana
        </option>
        <option className="text-black text-md" value="Gibraltar">
          Gibraltar
        </option>
        <option className="text-black text-md" value="Greece">
          Greece
        </option>
        <option className="text-black text-md" value="Greenland">
          Greenland
        </option>
        <option className="text-black text-md" value="Grenada">
          Grenada
        </option>
        <option className="text-black text-md" value="Guadeloupe">
          Guadeloupe
        </option>
        <option className="text-black text-md" value="Guam">
          Guam
        </option>
        <option className="text-black text-md" value="Guatemala">
          Guatemala
        </option>
        <option className="text-black text-md" value="Guinea">
          Guinea
        </option>
        <option className="text-black text-md" value="Guinea-Bissau">
          Guinea-Bissau
        </option>
        <option className="text-black text-md" value="Guyana">
          Guyana
        </option>
        <option className="text-black text-md" value="Haiti">
          Haiti
        </option>
        <option
          className="text-black text-md"
          value="Heard and McDonald Islands"
        >
          Heard and Mc Donald Islands
        </option>
        <option className="text-black text-md" value="Holy See">
          Holy See (Vatican City State)
        </option>
        <option className="text-black text-md" value="Honduras">
          Honduras
        </option>
        <option className="text-black text-md" value="Hong Kong">
          Hong Kong
        </option>
        <option className="text-black text-md" value="Hungary">
          Hungary
        </option>
        <option className="text-black text-md" value="Iceland">
          Iceland
        </option>
        <option className="text-black text-md" value="India">
          India
        </option>
        <option className="text-black text-md" value="Indonesia">
          Indonesia
        </option>
        <option className="text-black text-md" value="Iran">
          Iran (Islamic Republic of)
        </option>
        <option className="text-black text-md" value="Iraq">
          Iraq
        </option>
        <option className="text-black text-md" value="Ireland">
          Ireland
        </option>
        <option className="text-black text-md" value="Israel">
          Israel
        </option>
        <option className="text-black text-md" value="Italy">
          Italy
        </option>
        <option className="text-black text-md" value="Jamaica">
          Jamaica
        </option>
        <option className="text-black text-md" value="Japan">
          Japan
        </option>
        <option className="text-black text-md" value="Jordan">
          Jordan
        </option>
        <option className="text-black text-md" value="Kazakhstan">
          Kazakhstan
        </option>
        <option className="text-black text-md" value="Kenya">
          Kenya
        </option>
        <option className="text-black text-md" value="Kiribati">
          Kiribati
        </option>
        <option
          className="text-black text-md"
          value="Democratic People's Republic of Korea"
        >
          Korea, Democratic People{`'`}s Republic of
        </option>
        <option className="text-black text-md" value="Korea">
          Korea, Republic of
        </option>
        <option className="text-black text-md" value="Kuwait">
          Kuwait
        </option>
        <option className="text-black text-md" value="Kyrgyzstan">
          Kyrgyzstan
        </option>
        <option className="text-black text-md" value="Lao">
          Lao People{`'`}s Democratic Republic
        </option>
        <option className="text-black text-md" value="Latvia">
          Latvia
        </option>
        <option className="text-black text-md" value="Lebanon" selected>
          Lebanon
        </option>
        <option className="text-black text-md" value="Lesotho">
          Lesotho
        </option>
        <option className="text-black text-md" value="Liberia">
          Liberia
        </option>
        <option className="text-black text-md" value="Libyan Arab Jamahiriya">
          Libyan Arab Jamahiriya
        </option>
        <option className="text-black text-md" value="Liechtenstein">
          Liechtenstein
        </option>
        <option className="text-black text-md" value="Lithuania">
          Lithuania
        </option>
        <option className="text-black text-md" value="Luxembourg">
          Luxembourg
        </option>
        <option className="text-black text-md" value="Macau">
          Macau
        </option>
        <option className="text-black text-md" value="Macedonia">
          Macedonia, The Former Yugoslav Republic of
        </option>
        <option className="text-black text-md" value="Madagascar">
          Madagascar
        </option>
        <option className="text-black text-md" value="Malawi">
          Malawi
        </option>
        <option className="text-black text-md" value="Malaysia">
          Malaysia
        </option>
        <option className="text-black text-md" value="Maldives">
          Maldives
        </option>
        <option className="text-black text-md" value="Mali">
          Mali
        </option>
        <option className="text-black text-md" value="Malta">
          Malta
        </option>
        <option className="text-black text-md" value="Marshall Islands">
          Marshall Islands
        </option>
        <option className="text-black text-md" value="Martinique">
          Martinique
        </option>
        <option className="text-black text-md" value="Mauritania">
          Mauritania
        </option>
        <option className="text-black text-md" value="Mauritius">
          Mauritius
        </option>
        <option className="text-black text-md" value="Mayotte">
          Mayotte
        </option>
        <option className="text-black text-md" value="Mexico">
          Mexico
        </option>
        <option className="text-black text-md" value="Micronesia">
          Micronesia, Federated States of
        </option>
        <option className="text-black text-md" value="Moldova">
          Moldova, Republic of
        </option>
        <option className="text-black text-md" value="Monaco">
          Monaco
        </option>
        <option className="text-black text-md" value="Mongolia">
          Mongolia
        </option>
        <option className="text-black text-md" value="Montserrat">
          Montserrat
        </option>
        <option className="text-black text-md" value="Morocco">
          Morocco
        </option>
        <option className="text-black text-md" value="Mozambique">
          Mozambique
        </option>
        <option className="text-black text-md" value="Myanmar">
          Myanmar
        </option>
        <option className="text-black text-md" value="Namibia">
          Namibia
        </option>
        <option className="text-black text-md" value="Nauru">
          Nauru
        </option>
        <option className="text-black text-md" value="Nepal">
          Nepal
        </option>
        <option className="text-black text-md" value="Netherlands">
          Netherlands
        </option>
        <option className="text-black text-md" value="Netherlands Antilles">
          Netherlands Antilles
        </option>
        <option className="text-black text-md" value="New Caledonia">
          New Caledonia
        </option>
        <option className="text-black text-md" value="New Zealand">
          New Zealand
        </option>
        <option className="text-black text-md" value="Nicaragua">
          Nicaragua
        </option>
        <option className="text-black text-md" value="Niger">
          Niger
        </option>
        <option className="text-black text-md" value="Nigeria">
          Nigeria
        </option>
        <option className="text-black text-md" value="Niue">
          Niue
        </option>
        <option className="text-black text-md" value="Norfolk Island">
          Norfolk Island
        </option>
        <option className="text-black text-md" value="Northern Mariana Islands">
          Northern Mariana Islands
        </option>
        <option className="text-black text-md" value="Norway">
          Norway
        </option>
        <option className="text-black text-md" value="Oman">
          Oman
        </option>
        <option className="text-black text-md" value="Pakistan">
          Pakistan
        </option>
        <option className="text-black text-md" value="Palau">
          Palau
        </option>
        <option className="text-black text-md" value="Panama">
          Panama
        </option>
        <option className="text-black text-md" value="Papua New Guinea">
          Papua New Guinea
        </option>
        <option className="text-black text-md" value="Paraguay">
          Paraguay
        </option>
        <option className="text-black text-md" value="Peru">
          Peru
        </option>
        <option className="text-black text-md" value="Philippines">
          Philippines
        </option>
        <option className="text-black text-md" value="Pitcairn">
          Pitcairn
        </option>
        <option className="text-black text-md" value="Poland">
          Poland
        </option>
        <option className="text-black text-md" value="Portugal">
          Portugal
        </option>
        <option className="text-black text-md" value="Puerto Rico">
          Puerto Rico
        </option>
        <option className="text-black text-md" value="Qatar">
          Qatar
        </option>
        <option className="text-black text-md" value="Reunion">
          Reunion
        </option>
        <option className="text-black text-md" value="Romania">
          Romania
        </option>
        <option className="text-black text-md" value="Russia">
          Russian Federation
        </option>
        <option className="text-black text-md" value="Rwanda">
          Rwanda
        </option>
        <option className="text-black text-md" value="Saint Kitts and Nevis">
          Saint Kitts and Nevis
        </option>
        <option className="text-black text-md" value="Saint LUCIA">
          Saint LUCIA
        </option>
        <option className="text-black text-md" value="Saint Vincent">
          Saint Vincent and the Grenadines
        </option>
        <option className="text-black text-md" value="Samoa">
          Samoa
        </option>
        <option className="text-black text-md" value="San Marino">
          San Marino
        </option>
        <option className="text-black text-md" value="Sao Tome and Principe">
          Sao Tome and Principe
        </option>
        <option className="text-black text-md" value="Saudi Arabia">
          Saudi Arabia
        </option>
        <option className="text-black text-md" value="Senegal">
          Senegal
        </option>
        <option className="text-black text-md" value="Seychelles">
          Seychelles
        </option>
        <option className="text-black text-md" value="Sierra">
          Sierra Leone
        </option>
        <option className="text-black text-md" value="Singapore">
          Singapore
        </option>
        <option className="text-black text-md" value="Slovakia">
          Slovakia (Slovak Republic)
        </option>
        <option className="text-black text-md" value="Slovenia">
          Slovenia
        </option>
        <option className="text-black text-md" value="Solomon Islands">
          Solomon Islands
        </option>
        <option className="text-black text-md" value="Somalia">
          Somalia
        </option>
        <option className="text-black text-md" value="South Africa">
          South Africa
        </option>
        <option className="text-black text-md" value="South Georgia">
          South Georgia and the South Sandwich Islands
        </option>
        <option className="text-black text-md" value="Span">
          Spain
        </option>
        <option className="text-black text-md" value="SriLanka">
          Sri Lanka
        </option>
        <option className="text-black text-md" value="St. Helena">
          St. Helena
        </option>
        <option className="text-black text-md" value="St. Pierre and Miguelon">
          St. Pierre and Miquelon
        </option>
        <option className="text-black text-md" value="Sudan">
          Sudan
        </option>
        <option className="text-black text-md" value="Suriname">
          Suriname
        </option>
        <option className="text-black text-md" value="Svalbard">
          Svalbard and Jan Mayen Islands
        </option>
        <option className="text-black text-md" value="Swaziland">
          Swaziland
        </option>
        <option className="text-black text-md" value="Sweden">
          Sweden
        </option>
        <option className="text-black text-md" value="Switzerland">
          Switzerland
        </option>
        <option className="text-black text-md" value="Syria">
          Syrian Arab Republic
        </option>
        <option className="text-black text-md" value="Taiwan">
          Taiwan, Province of China
        </option>
        <option className="text-black text-md" value="Tajikistan">
          Tajikistan
        </option>
        <option className="text-black text-md" value="Tanzania">
          Tanzania, United Republic of
        </option>
        <option className="text-black text-md" value="Thailand">
          Thailand
        </option>
        <option className="text-black text-md" value="Togo">
          Togo
        </option>
        <option className="text-black text-md" value="Tokelau">
          Tokelau
        </option>
        <option className="text-black text-md" value="Tonga">
          Tonga
        </option>
        <option className="text-black text-md" value="Trinidad and Tobago">
          Trinidad and Tobago
        </option>
        <option className="text-black text-md" value="Tunisia">
          Tunisia
        </option>
        <option className="text-black text-md" value="Turkey">
          Turkey
        </option>
        <option className="text-black text-md" value="Turkmenistan">
          Turkmenistan
        </option>
        <option className="text-black text-md" value="Turks and Caicos">
          Turks and Caicos Islands
        </option>
        <option className="text-black text-md" value="Tuvalu">
          Tuvalu
        </option>
        <option className="text-black text-md" value="Uganda">
          Uganda
        </option>
        <option className="text-black text-md" value="Ukraine">
          Ukraine
        </option>
        <option className="text-black text-md" value="United Arab Emirates">
          United Arab Emirates
        </option>
        <option className="text-black text-md" value="United Kingdom">
          United Kingdom
        </option>
        <option className="text-black text-md" value="United States">
          United States
        </option>
        <option
          className="text-black text-md"
          value="United States Minor Outlying Islands"
        >
          United States Minor Outlying Islands
        </option>
        <option className="text-black text-md" value="Uruguay">
          Uruguay
        </option>
        <option className="text-black text-md" value="Uzbekistan">
          Uzbekistan
        </option>
        <option className="text-black text-md" value="Vanuatu">
          Vanuatu
        </option>
        <option className="text-black text-md" value="Venezuela">
          Venezuela
        </option>
        <option className="text-black text-md" value="Vietnam">
          Viet Nam
        </option>
        <option className="text-black text-md" value="Virgin Islands (British)">
          Virgin Islands (British)
        </option>
        <option className="text-black text-md" value="Virgin Islands (U.S)">
          Virgin Islands (U.S.)
        </option>
        <option
          className="text-black text-md"
          value="Wallis and Futana Islands"
        >
          Wallis and Futuna Islands
        </option>
        <option className="text-black text-md" value="Western Sahara">
          Western Sahara
        </option>
        <option className="text-black text-md" value="Yemen">
          Yemen
        </option>
        <option className="text-black text-md" value="Serbia">
          Serbia
        </option>
        <option className="text-black text-md" value="Zambia">
          Zambia
        </option>
        <option className="text-black text-md" value="Zimbabwe">
          Zimbabwe
        </option>
      </select>
    </div>
  );
}
