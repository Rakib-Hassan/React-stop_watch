import React, { Component } from 'react';
import './App.css';
import Title from './frist_title/Title';
import Countdown from './Countdown/Countdown'
import Controlar from  './controlar/controlar'
import Laps from './Laps/Laps'

class App extends Component {
  state = {
    time:{
    min:0,
    sec:0,
    mili:0
    },
    laps: []
}

     getstart(){
 this.intervalID = setInterval(()=> {
    let min= this.state.time.min
    let sec= this.state.time.sec
    let mili = this.state.time.mili

    if(mili >=10){
      sec= sec + 1
      mili= 0
    }

    if(sec >=60){
      min = min +1
      sec = 0
    }
    this.setState({
      ...this.state,
     time:{
      min,
      sec,
      mili:mili + 1
     }
    })
  },100)

}
getpause(){
  clearInterval(this.intervalID)
}
getlaps(){
  let time ={
    ...this.state.time
  }
  this.setState({
    ...this.state,
    laps: [time,...this.state.laps]
  })
  console.log(this.state.laps);
}
getreset(){
  this.setState({
    time:{
      min:0,
      sec:0,
      mili:0
     },
     laps:[]
  })
}

  render() {
    return (
      <div className="App">
        <div className="container py-5">
   
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
        <Title/>
         <Countdown time={this.state.time}/>
         <Controlar 
         start={()=> this.getstart()}
         pause={()=> this.getpause()}
         reset={()=> this.getreset()}
         laps= {()=> this.getlaps()}
         />
         <Laps className="my-5" laps={this.state.laps } />
        </div>
      </div>
        </div>
     
      </div>
    );
  }
}

export default App;
