import React, { Component } from 'react';
import './Title.css'

class Title extends Component {

    state = {
        title: 'this is a dumy title',
        isinput: false
    }
    editHandlar() {
        this.setState({
            ...this.state,
            isinput: true
        })
    }
    inputchange(event){
    
        this.setState({
            ...this.state,
           title: event.target.value
        })
    }
    keypressHandler(event){
        if(event.key === 'Enter'){
            this.setState({
                ...this.state,
                isinput:false
            })
        }
    }
    onBlurHandler(event){
        this.setState({
            ...this.state,
            isinput:false
        })
    }
    

    render() {
        let output = null
        if (this.state.isinput) {
            output = <div className="Title">
                <input 
                className="form-control" 
                onChange= {(event) => this.inputchange(event)}
                onKeyPress= { (event) => this.keypressHandler(event)}
                onBlur= {event => this.onBlurHandler(event)}
                type="text" 
                value={this.state.title} />
            </div>
        }
        else {
            output = (
                <div className="d-flex titles"> <h1 className="display-4">{this.state.title}</h1>
                    <span onClick={() => this.editHandlar()} className="ml-auto edit_icon">
                        <i className="fas fa-edit"></i>
                    </span>
                </div>

            )
        }
        return (
            <div> {output}</div>
        )
    }
}
export default Title;