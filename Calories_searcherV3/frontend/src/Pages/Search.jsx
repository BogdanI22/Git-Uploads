import React,{useState, useEffect} from "react";

import search_icon_dark from '../assets/search-N.png'
import search_icon_day from '../assets/search-D.png'

import './Search.css'

export default function Search({theme, setTheme}){

    const[input,setInput] = useState('');

    const[elements,setElements]= useState([]);

    const[elemSearched, setElemSearched] = useState('');
    
    //API fetch for all items
    useEffect(()=>{
        fetch("http://localhost:8080/categories/elements")
        .then(response => response.json())
        .then(data => setElements(data))
    },[])
    

    const onSearch = (searchTerm) => {
        //API fetch the search response
        setInput(searchTerm);             

        const url = "http://localhost:8080/categories/element/name/"+searchTerm;
        fetch(url)
        .then(response => response.json())
        .then(data => setElemSearched(data))
    
        console.log('url: ',url)
        console.log('element searched api response: ', elemSearched)
        console.log('search: ',searchTerm)
    };



    return(
        <>
            <div className="search-box">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />
                {/* 
                <img className = "searchbutton" 
                    //onClick ={()=> onSearch(input)} 
                    src = {theme == 'light' ? search_icon_day : search_icon_dark} 
                    alt = "SearchIcon" 
                />*/}
                
            </div> 
            <div className="dropdown">
                    {elements
                    .filter((element) => {
                        const srcTerm = input.toLowerCase();
                        const name = element.name.toLowerCase();
                        return (
                            srcTerm&& 
                            name.startsWith(srcTerm)&& 
                            name!== srcTerm
                        )
                    })
                    //.slice(0,3)
                    .map((element,index)=> (
                        <div onClick= {() => onSearch(element.name)} className="dropdown-row" key={index}>{element.name}</div>
                    ))}

            </div>
                <p className="element-searched">{elemSearched.name} : {elemSearched.caloryNumber}</p>
            
            </>    
        );
    }