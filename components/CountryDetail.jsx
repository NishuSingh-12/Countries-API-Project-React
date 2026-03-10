import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CountryDetail() {
  const params = useParams();
  const { state } = useLocation();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
 

  function updateCountryData(data) {
    setCountryData({
      name: data.name?.common,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population?.toLocaleString("en-IN"),
      region: data.region,
      subregion: data.subregion,
      capital: data.capital?.join(", "),
      tld: data.tld?.[0],
      flag: data.flags?.svg,
      languages: Object.values(data.languages || {}).join(", "),
      currencies: Object.values(data.currencies || {}) 
        .map((currency) => currency.name)
        .join(", "),
      borders: [],
    });
    if (!data.borders) {
      data.borders = [];
    }
    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      }),
    ).then((borders) => {
      setTimeout(()=>setCountryData((prevState) => ({ ...prevState, borders })))
    });
  }

  useEffect(() => {
   if ( state && state.name) {
    updateCountryData(state);
    return;
  }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [countryName]);
  if (notFound) {
    return <div>Country not found</div>;
  }
  return countryData === null ? (
    "Loading...."
  ) : (
    <>
      <main className="country-detail-container">
        <a href="#" onClick={() => history.back()} className="back-btn">
          <i className="fa-solid fa-arrow-left"></i> Back
        </a>
        <div className="country-detail-content">
          <div className="image-container">
            <img src={countryData.flag} alt={`${countryData.name} flag`} />
          </div>
          <div>
            <h2>{countryData.name}</h2>
            <p>
              Native Name: <span>{countryData.nativeName}</span>
            </p>
            <p>
              Population: <span>{countryData.population}</span>
            </p>
            <p>
              Region: <span>{countryData.region}</span>
            </p>
            <p>
              Sub Region: <span>{countryData.subregion}</span>
            </p>
            <p>
              Capital: <span>{countryData.capital}</span>
            </p>

            <p>
              Top Level Domain: <span>{countryData.tld}</span>
            </p>
            <p>
              Currencies: <span>{countryData.currencies}</span>
            </p>
            <p>
              Langauge: <span>{countryData.languages}</span>
            </p>
            {countryData.borders.length !== 0 && (
              <p>
                Border Countries:
                <span className="border-countries">
                  {countryData.borders.map((border) => (
                    <Link className="link" key={border} to={`/${border}`}>
                      {border}
                    </Link>
                  ))}
                </span>
              </p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
