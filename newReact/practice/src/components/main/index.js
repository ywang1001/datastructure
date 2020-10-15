import React, {Component} from 'react';

class Main extends Component{

    handleLogOut = () => {
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <h1>Main</h1>
                <button onClick = {this.handleLogOut}>log out</button>
            </div>
        )
    }
}

export default Main;