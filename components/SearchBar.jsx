export default function SearchBar({setQuery}) {
  return (
    <div className="SearchBar-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input onChange={(e)=>setQuery(e.target.value)} type="text" placeholder="Search for a country..."/>
    </div>
  )
}
