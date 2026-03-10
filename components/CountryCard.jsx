import { Link } from "react-router-dom";

export default function CountryCard({name,flag,population,region,capital,data}) {

  return (
   <Link to={`/${name}`} state={{data}} className="countryCard">
    <img src={flag} alt={`${name} flag`} />
    <div>
        <h2>{name}</h2>
        <p>Population: <span>{population.toLocaleString("en-IN")}</span></p>
        <p>Region: <span>{region}</span></p>
        <p>Capital: <span>{capital}</span></p>
    </div>
   </Link>
  )
}
