import React from 'react';

const userInput = (props) =>{
    return <input type="text" 
    onChange = {props.changingText}
    value = {props.newNameValue}/>;
};

export default userInput;

