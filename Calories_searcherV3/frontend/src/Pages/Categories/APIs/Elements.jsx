import React from 'react';
import {useState,useEffect} from 'react'
import './Elements.css'

function Elements({apiEndpoint}){

   const[elements,setElements]= useState([]);

   useEffect(()=>{
    fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => setElements(data))
    //.catch(err => console.log(err))

   },[])
   
    
    return(
        <div>
           <ul className="elements-list">
                <b><font size = '8'>The list:</font></b>
                {elements.map((list,index)=>(
                    <li className="element" key = {index}>{list.name} : ...................................................... {list.caloryNumber} (cal / 100g)</li>
                ))}
            </ul>
        </div>

    );

}
export default Elements
