import React, {useState, useEffect, Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Timer from './components/timer';
import Layout from './components/lout';


class  App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
      return(
        <div>
            <BrowserRouter>
                <Switch>
                   <Route path = '/' exact component = {Layout}/>
                   <Route path = '/timer' exact component = {Timer}/>
                </Switch>
            </BrowserRouter>
        </div>
      )
  }

  /*constructor(props){
    super(props);
    this.state = {
        time:0,
        on: false
    }
  }

  handleClick = () => {
    if(!this.state.on) {
      this.timer = setInterval(() => {
          this.setState({
            ...this.state,
            time: this.state.time+1,
            on: true
          })
      }, 1000);
    }else {
      this.setState({on: false})
      clearInterval(this.timer);
    }
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      time: 0,
      on: false
    })
    clearInterval(this.timer);
  }

  render(){
    return(
      <div>
          <p>{this.state.time}</p>
          <div>
             <button onClick = {this.handleClick}>{this.state.on ? 'stop' : 'start'}</button>
             <button onClick = {this.handleClear}>clear</button>
          </div>
      </div>
    )
  }*/
}


export default App;