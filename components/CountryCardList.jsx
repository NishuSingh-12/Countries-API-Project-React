import countrydata from "../countrydata";
import CountryCard from "./CountryCard";

export default function CountryCardList({query}) {
  return (
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
  );
}

