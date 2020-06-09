import React from 'react'

const validation = (props)=>{
    let ValidationMessage = 'The text is Long enough!!!';

    if(props.inputLength <=5){
        ValidationMessage = 'The text is too short!!!';
    }

    return(
        <div>
           <p>{ValidationMessage} {props.inputLength}</p>
        </div>
    )

};

export default validation