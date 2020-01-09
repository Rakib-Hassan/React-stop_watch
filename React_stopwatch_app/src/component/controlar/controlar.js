import React, { Component } from 'react';
import './Controlar.css'

class Controlar extends Component {
    state = {
       start:true,
       pause:false,
       lap:false,
       reset:false
    }
    startHandler(){
        this.setState({
            ...this.state,
            start:false,
            pause:true,
            lap:true,
        })
        this.props.start()
    }
    pauseHandler(){
        this.setState({
            ...this.state,
            start:true,
            pause:false,
            lap:false,
            reset:true
        })
        this.props.pause()

    }

    lapHandler(){
        this.props.laps()

    }
    resetHandler(){
        this.setState({
            ...this.state,
            start:true,
            pause:false,
            lap:false,
            reset:false

        })
        this.props.reset()
    }

getcControlar(){
    let output=null
    if(this.state.start && !this.state.reset){
        output=(
            <div className="btn_start">
                <button className="btn btn-success btn-lg px-5 ml-5"
                onClick={event=> this.startHandler()}
                >start
                </button>
            </div>
        )
    } else if(this.state.pause && this.state.lap){
        output=(
            <div className="btn_start d-flex">
                <button className="btn btn-primary btn-lg px-5 ml-5"
                onClick={event=> this.pauseHandler()}
                >pause
                </button>
                <button className="btn btn-warning btn-lg px-5 ml-5"
                onClick={event=> this.lapHandler()}
                >lap
                </button>
            </div>
        )
    }else if(this.state.start && this.state.reset){
        output=(
            <div className="btn_start d-flex">
                <button className="btn btn-success btn-lg px-5 ml-5"
                onClick={event=> this.startHandler()}
                >start
                </button>
                <button className="btn btn-danger btn-lg px-5 ml-5"
                onClick={event=> this.resetHandler()}
                >reset
                </button>
            </div>
        )
    }
    return output
}
    render() {
        return this.getcControlar()

    }

}
export default Controlar;