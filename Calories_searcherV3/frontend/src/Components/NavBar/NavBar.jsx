import React from "react";
import './NavBar.css'
import mode_button from '../../assets/daynight.png'

import food_kal_logo from '../../assets/foodkal.png'
import food_kal_logo_night from '../../assets/foodkal-night.png'


const NavBar = ({theme, setTheme}) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    return(
        <div className="navbar">
            <img src ={theme == 'light' ? food_kal_logo : food_kal_logo_night} alt = "SwitchModeButton" className="logo" />

            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li><a href="/categories">Categories</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/search">Search</a></li>
            </ul>
       
            <img onClick= {()=> {toggle_mode()}} src={mode_button} alt="ModeButton" className="mode-button"/>

        </div> 
    )
}

export default NavBar
