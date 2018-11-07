import React from 'react';
import '../components/header.css'
import Button from '../components/Button.js'

function Header(props) {
    return (
        <div className="heading">
            <h1 id="list1">World Countries List</h1>
            <h3 id="list2" >Total number of countries: 
               {props.countriesLength} </h3>
            {/* function to show the number of countries comes here  */}
        <div id="totalCountries"></div>
            <Button buttonText='Search with start word' idText='button1' buttonLabel = 'button1'/>
            <Button buttonText='Search with multiple words' idText='button2' buttonLabel = 'button2' />
            <input id="search-input" type="text" placeholder="Search Country. . . " />
         </div>    
         )
            }
            
export default Header;