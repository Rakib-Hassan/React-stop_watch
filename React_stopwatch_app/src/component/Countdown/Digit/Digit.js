import React from 'react';
import'./Digit.css'
const Digit = (props) =>{

    return(
       <div className="Digit mx-4">
<h1 className="display-4 py-3 digit_mi">{props.value < 10 ? `0${props.value}` : props.value}</h1>
       </div>
    )
}
export default Digit;