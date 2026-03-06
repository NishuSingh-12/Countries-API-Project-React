import "./App.css";
import CountryCard from "./components/CountryCard";
import DropDownMenu from "./components/DropDownMenu";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <>
      <Header />
      <div className="searchbar-and-dropmenu-container">
        <SearchBar />
        <DropDownMenu />
      </div>
      <CountryCard/>
    </>
  );
}
