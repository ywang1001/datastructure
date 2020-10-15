import React, {Component} from 'react';

class Timer extends Component{
    constructor(props) {
       super(props);
       this.state = {
          start: 'start',
          num: 0
       }
    }

    handleT = () => {
       if(this.state.start === 'start') {
           this.timer = setInterval(()=>{
              this.setState({
                  ...this.state,
                  start:'stop',
                  num: this.state.num+1
              })
           }, 1000)
       }else {
           this.setState({
               ...this.state,
               start: 'start',
           });
           clearInterval(this.timer);
       }
    }

    handleClear = (e) => {
        this.setState({
            ...this.state,
            start: 'start',
            num: 0
        })
        clearInterval(this.timer);
    }

    render(){
        return(
          <div>
              <h1>倒计时</h1>
              <h2>{this.state.num}</h2>
              <button onClick = {this.handleT}>{this.state.start}</button>
              <button onClick = {this.handleClear}>clear</button>

              <button onClick = {()=>this.props.history.push('/')}>back</button>
          </div>
        )
    }
}

export default Timer;