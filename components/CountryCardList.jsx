import countrydata from "../countrydata";
import CountryCard from "./CountryCard";

export default function CountryCardList() {
  return (
    <div className="countryCardList">
      {countrydata
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

