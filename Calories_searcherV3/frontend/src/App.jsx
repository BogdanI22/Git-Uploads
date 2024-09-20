import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";

import Home from './Pages/Home'
import About from './Pages/About';
import Categories from './Pages/Categories';
import Vegetables from './Pages/Categories/Vegetables';
import Meat from './Pages/Categories/Meat';
import Drinks from './Pages/Categories/Drinks';
import Bakery from './Pages/Categories/Bakery';
import Dairies from "./Pages/Categories/Dairies";
import Sweets from './Pages/Categories/Sweets';
import Contact from './Pages/Contact';
import Search from "./Pages/Search";

function App() {

  const current_theme = localStorage.getItem('current_theme');
  const [theme,setTheme] = useState(current_theme ? current_theme : 'light'); 
  useEffect(()=>{localStorage.setItem('current_theme',theme)},[theme])

  let component
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break  
    case "/about":
      component = <About/>
      break
    case "/categories":
        component = <Categories/>
        break
    case "/categories/vegetables":
        component = <Vegetables/>
        break
    case "/categories/meat":
        component = <Meat/>
        break
    case "/categories/drinks":
        component = <Drinks/>
        break
    case "/categories/bakery":
        component = <Bakery/>
        break
    case "/categories/dairies":
        component = <Dairies/>
        break
    case "/categories/sweets":
        component = <Sweets/>
        break
    case "/contact":
      component = <Contact/>
      break
    case "/search":
      component = <Search theme={theme} setTheme={setTheme}/>
      break   
  }

  return (
    <div className={`container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme}/>
      {component}

     
    </div>




  )
}

export default App
