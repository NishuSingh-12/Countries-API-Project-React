import { useEffect, useState } from "react";


export default function CountryDetail() {
  const countryName = new URLSearchParams(location.search).get('name');
  const [countryData,setCountryData]=useState(null);

  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then(res => res.json())
    .then(([data])=>{
      console.log(data)
     setCountryData({
        name:data.name.common,
        nativeName: Object.values(data.name.nativeName)[0].common,
        population: data.population.toLocaleString("en-IN"),
        region: data.region,
        subregion: data.subregion,
        capital: data.capital.join(", "),
        tld: data.tld,
        flag: data.flags.svg,
        borders: data.borders.join(", "),
        languages: Object.values(data.languages).join(", "),
        currencies: Object.values(data.currencies)
        .map((currency)=> currency.name)
        .join(', '),
      })     
    });
  },[])
  return (
countryData === null? "Loading....":  (
    <main className="country-detail-container">
      <a href="#" className="back-btn">&#8592; Back</a>
        <div className="country-detail-content">
         <div className="image-container">
            <img src={countryData.flag} alt={`${countryData.name} flag`} />
         </div>
         <div>
            <h2>{countryData.name}</h2>
            <p>Native Name: <span>{countryData.nativeName}</span></p>
            <p>Population: <span>{countryData.population}</span></p>
            <p>Region: <span>{countryData.region}</span></p>
            <p>Sub Region: <span>{countryData.subregion}</span></p>
            <p>Capital: <span>{countryData.capital}</span></p>
            <p>Border Countries: <span>{countryData.borders}</span></p>
            <p>Top Level Domain: <span>{countryData.tld}</span></p>
            <p>Currencies: <span>{countryData.currencies}</span></p>
            <p>Langauge: <span>{countryData.languages}</span></p>
         </div>
        </div>
    </main>
)
  )
}
