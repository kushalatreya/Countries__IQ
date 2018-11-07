import React from 'react';

function Button (props){
    return(
        <div>
        <input type="radio" name="radio" id={props.idText}/>
            <label htmlFor={props.buttonLabel}>{props.buttonText}</label>         
        </div>
    )
}

export default Button;
//Search with start word
//Search with multiple words
//button1 button2