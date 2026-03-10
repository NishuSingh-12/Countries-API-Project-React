
import { useState } from "react";
import CountryCardList from "./CountryCardList";

export default function Header() {
  const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem('isDarkMode')))

  if(isDark){
     document.body.classList.add('dark')
  }else{
     document.body.classList.remove('dark')
  }
  
  return (
   <header className="header">
    <div>
      <h2>Where in the world?</h2>
      <p onClick={()=>{
        setIsDark(!isDark)
        localStorage.setItem('isDarkMode', !isDark)
      }}><span><i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i></span>{isDark ? "Light" : "Dark"} Mode</p>
    </div>
   </header>
  )
}
