import React, {Component} from 'react';

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
           name:"",
           password:""
        }
    }

    componentDidMount(){
       console.log('sb will moount');
       
        const tob = JSON.parse(localStorage.getItem('KEY'));
        console.log(tob.name, ',', tob.password);
        if(typeof tob === 'object') {
        const {name, password} = tob;
        //if(name && password) {
           this.setState({
               ...this.state,
               name: name,
               password: password
           })
       // }
      }
       
    }

    handleName = (e) => {
      this.setState({name: e.target.value});
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value});
    }

    onSubmit = (e) => {
      e.preventDefault();
      let obj = {
          name: this.state.name,
          password: this.state.password
      };
      localStorage.setItem('KEY', JSON.stringify(obj));
      //sessionStorage.setItem('')
      this.props.history.push('/main')
    }

    render(){
        return(
            <div>
                <h1>Log In</h1>
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <input type = 'text' name = 'username' value = {this.state.name} onChange = {this.handleName}/>
                    </div>

                    <div>
                        <input type = 'password' name = 'password' value = {this.state.password} onChange = {this.handlePassword}/>
                    </div>
                     
                    <div>
                        <input type = 'submit' value = 'submit'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;