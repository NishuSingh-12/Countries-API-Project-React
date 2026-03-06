
export default function CountryCard() {
  return (
   <a href="#" className="countryCard">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtiD9mSHJoMfsIKQaoNCKuVC_YwG9LtxJGcLBtyaXyqsCETaPh-s3xr_-65xZaZ5_BDfZdQz7J-T7Ioy52RY_n-cjrczdaTHdndh-EbA&s=10" alt="flag" />
    <div>
        <h2>{name}</h2>
        <p>Population: <span>1000</span></p>
        <p>Region: <span>India</span></p>
        <p>Capital: <span>Delhi</span></p>

    </div>
   </a>
  )
}
