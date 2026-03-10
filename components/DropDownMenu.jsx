export default function DropDownMenu({setQuery}) {
  return (
<select id="region" onChange={(e)=>setQuery(e.target.value.toLocaleLowerCase())}>
<option hidden>Filter by Region</option>
<option value="asia">Asia</option>
<option value="europe">Europe</option>
<option value="africa">Africa</option>
<option value="americas">Americas</option>
<option value="australia">Australia</option>
<option value="oceania">Oceania</option>
</select>
  )
}
