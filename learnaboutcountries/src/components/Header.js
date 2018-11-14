import React from 'react';
import '../components/header.css'


function Header(props) {
    return (
        <div className="heading">
            <h1 id="list1">World Countries List</h1>
            <h3 id="list2" >Total number of countries: 
               {props.countriesLength} </h3>
        </div>    
         )
            }
            
export default Header;