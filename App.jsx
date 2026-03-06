import { useState } from "react";
import "./App.css";
import CountryCardList from "./components/CountryCardList";
import DropDownMenu from "./components/DropDownMenu";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

export default function App() {
      const [query,setQuery] = useState("")
  return (
    <>
      <Header />
      <div className="searchbar-and-dropmenu-container">
        <SearchBar setQuery={setQuery}/>
        <DropDownMenu />
      </div>
    <CountryCardList query={query}/>
    </>
  );
}
