import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header.js'
//import countries from './data/countryList'
import Button from '../src/components/Button.js'
import '../src/components/header.css'

const Countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];


class App extends Component {

  state = {
    searchKey: "",
    reslut: Countries,
    startWith: false,
    includes: false,
  }

  searchEventHandler = (e) => {
    this.setState({ searchKey: e.target.value });
  }

  startWithEventHandler = (e) => {
    this.setState({ startWith: true, includes: false });
  }

  includesEventHandler = (e) => {
    this.setState({ startsWith: false, includes: true })
  }

  startsWith = (keyWord) => { // search countries that start with the input search key word		
    return Countries.filter(e => e.toLowerCase().startsWith(keyWord.toLowerCase()));
  }

  containsWord = (keyWord) => { // search countries that includes the search key word		
    return Countries.filter(e => e.toLowerCase().includes(keyWord.toLowerCase()));
  }

  randomHexaNumberGenerator = () => {
    let result = "#";
    for (let i = 0; i < 6; i++) {
      result += Math.floor(Math.random() * 16).toString(16);
    }
    return result;
  }

  render() {
    let result = this.state.reslut;
    let key = this.state.searchKey;
    if (this.state.startWith) {
      result = this.startsWith(key);
    }

    if (this.state.includes) {
      result = this.containsWord(key);
    }
    let numOfResults = (result.length > 1 ? `${result.length} matchs found` : `${(result.length == 1 ? "1 match found" : "No matches found")}`);

    return (
      <div className="App">
        <Header 
          countriesLength={numOfResults}
          />
        <div id="totalCountries"></div>
        <Button onChange= {this.startWithEventHandler} buttonText='Search with start word' idText='startWord' buttonLabel='startWord' value= 'startWord' />
        <Button onChange={this.includesEventHandler} buttonText='Search with multiple words' idText='anyWord' buttonLabel='anyWord'value = 'anyWord' />
        <input onChange= {this.searchEventHandler} id="search-input" type="text" placeholder="Search Country. . . " />

        {result.map((country,index) => (
          <div key={index} style={{ background: this.randomHexaNumberGenerator()}} >{country}</div>))}
      </div>
    );
  }
}
export default App;
