import React, {Component} from 'react';

class ServicePage extends Component {
/*
    constructor(props) {
        super(props);
        this.state = {
          on: false,
          num: 0
        }
      }   
   
      handleTimer = (e) => {
        if(!this.state.on) {
          this.id = setInterval(()=>{
            this.setState({
              ...this.state,
              on: true,
              num: this.state.num+1
            })
          }, 1000)
        }else {
          clearInterval(this.id);
          this.setState({on: false})
        }
      }
   
      handleClear = (e) => {
        clearInterval(this.id);
        this.setState({
          ...this.state,
          on: false,
          num: 0
        })
      }

    handleLogout = () => {
        this.props.history.push('/');
    } 

    render(){
      return(
          <div>
              <h1>Welcome {this.props.location.state}</h1>
              <h1>{this.state.num}</h1>
           <button onClick = {this.handleTimer}>{this.state.on ? 'stop': 'start'}</button>
           <button onClick = {this.handleClear}>clear</button>
           <button onClick = {this.handleLogin}>Login</button>
              <button onClick = {this.handleLogout}>logout</button>
          </div>
      )
    }*/
    render(){
        return(
            <div>Service</div>
        )
    }
}

export default ServicePage;