import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const url = import.meta.env.VITE_URL;

const DetailsPage = () => {
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]); 
  const [error, setError] = useState(null);
  const { code } = useParams();  // Get the country code from the URL
  const navigate = useNavigate();  // For navigating to border country pages

  // Fetch the country data
  const fetchCountryData = async () => {
    try {
      const res = await fetch(`${url}/alpha/${code}`);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setCountry(data[0]);
      setError(null);
      
      if (data[0].borders) {
        // Fetch border countries if the country has borders
        fetchBorderCountries(data[0].borders);
      }
    } catch (error) {
      setError("Could not fetch country data. Please try again later.");
    }
  };

  // Fetch border countries' data
  const fetchBorderCountries = async (borderCodes) => {
    try {
      const borderCountryPromises = borderCodes.map((borderCode) =>
        fetch(`${url}/alpha/${borderCode}`).then((res) => res.json())
      );
      
      const borderCountryResponses = await Promise.all(borderCountryPromises);
      
      // Collect both country names and their codes (cca3 or cca2)
      const borderCountryNamesAndCodes = borderCountryResponses.map((countryData) => ({
        name: countryData[0].name.common,
        code: countryData[0].cca3,  // Use cca3 code (ISO 3166-1 alpha-3 code)
      }));

      setBorderCountries(borderCountryNamesAndCodes);
    } catch (error) {
      setError("Could not fetch border countries' data. Please try again later.");
    }
  };

  useEffect(() => {
    // Fetch the country data whenever the 'code' param changes
    fetchCountryData();
  }, [code]);

  // If there is an error, show the error message
  if (error) return <div>{error}</div>;

  return (
    <div className="mx-auto mb-10 container">
      <div className="px-10 pt-10 flex flex-col justify-center items-start gap-10">
        <button className="p-3 card shadow-lg rounded-md" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </button>

        {country && (
          <div className="flex max-md:flex-col gap-10 items-center">
            <div className="w-full lg:w-[50rem] lg:h-[30rem]">
              <img
                className="w-full h-full"
                src={country.flags.png}
                alt={country.name.common}
              />
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-3xl font-bold">{country.name.common}</p>
              <div className="flex max-lg:flex-col gap-10">
                <div>
                  <p>
                    <strong>Native Name:</strong>{" "}
                    {country.name.nativeName
                      ? Object.values(country.name.nativeName)[0].common
                      : "NA"}
                  </p>
                  <p>
                    <strong>Population:</strong>{" "}
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p>
                    <strong>Sub Region:</strong> {country.subregion}
                  </p>
                  <p>
                    <strong>Capital:</strong>{" "}
                    {country.capital ? country.capital.join(", ") : "NA"}
                  </p>
                </div>

                <div>
                  <p>
                    <strong>Top Level Domain:</strong>{" "}
                    {country.tld ? country.tld.join(", ") : "NA"}
                  </p>
                  <p>
                    <strong>Currencies:</strong>{" "}
                    {country.currencies
                      ? Object.values(country.currencies)
                          .map((currency) => currency.name)
                          .join(", ")
                      : "NA"}
                  </p>
                  <p>
                    <strong>Languages:</strong>{" "}
                    {country.languages
                      ? Object.values(country.languages).join(", ")
                      : "NA"}
                  </p>
                </div>
              </div>

              <div>
                <p>
                  <strong>Border Countries:</strong>
                </p>
                <div>
                  {borderCountries.length > 0 ? (
                    borderCountries.map((border, index) => (
                      <button
                        key={index}
                        onClick={() => navigate(`/country/${border.code}`)}  // Navigate using the border's code
                        className="m-2 p-2 border border-gray-300 rounded card shadow-lg"
                      >
                        {border.name}
                      </button>
                    ))
                  ) : (
                    <span>None</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
