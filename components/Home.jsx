import { useState } from "react";
import CountryCardList from "./CountryCardList";
import DropDownMenu from "./DropDownMenu";
import SearchBar from "./SearchBar";


export default function Home() {
    const [query,setQuery] = useState("")
  return (
    <main>
          <div className="searchbar-and-dropmenu-container">
            <SearchBar setQuery={setQuery}/>
            <DropDownMenu setQuery={setQuery}/>
          </div>
        <CountryCardList query={query}/>
    </main>
  )
}
