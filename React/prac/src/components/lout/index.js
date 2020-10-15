import React, {Component} from 'react';

class Layout extends Component {
     constructor(props) {
         super(props);
         this.state = {

         }
     }
      render(){
           return(
               <div>
                   <h1>Main page</h1>
                   <button onClick = {()=> this.props.history.push('/timer')}>计时器</button>
               </div>
           )
      }
}

export default Layout;