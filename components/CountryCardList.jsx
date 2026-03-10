import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryCardListShimmer from "./CountryCardListShimmer";

export default function CountryCardList({query}) {
    const [countrydata,setCountryData]=useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,subregion")
        .then((res)=>res.json())
        .then((data)=>{
            setCountryData(data)
        },[])
    })
  return (
   <>
  
  {
    !countrydata.length ? (
      <CountryCardListShimmer/>
    ) :(
        <div className="countryCardList">
      {countrydata
      .filter((country)=>country.name.common.toLowerCase().includes(query.toLowerCase())
    )
      .map((country, i) => (
        <CountryCard
          key={i}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
        />
      ))}
    </div>
    )
  }
   </>
  );
}

