import React from 'react'

const Laps = (props) => {

    return(
        <ul className="list-group list-group-flush">
            {props.laps.map((lap,index) => {
                return(
                    <li key={index} className="list-group-item">
                       <h3> 
                        <span className="text-dark">Minute: </span>
                        <span className="text-dark">{lap.min}</span>
                        <span className="text-dark">Second: </span>
                        <span className="text-dark">{lap.sec}</span>
                        <span className="text-dark">mili: </span>
                        <span className="text-dark">{lap.mili}</span>
                        </h3>
                    </li>
                )
            })}
        </ul>
    )
}
export default Laps

