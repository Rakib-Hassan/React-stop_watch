import React from 'react';
import Digit from './Digit/Digit'

const Countdown = (props) =>{

    return(
       <div className="d-flex">
           <Digit value={ props.time.min } />
           <Digit value={ props.time.sec } />
           <Digit value={ props.time.mili } />
       </div>
    )
}
export default Countdown;