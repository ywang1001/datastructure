import React,{Component}from 'react';
import axios from 'axios'; 

class App extends Component{
    constructor(props) {
      super(props);
      this.state = {
        tabs:[
          {
            content: "tab1",
            selected: false
          },
          {
            content: "tab2",
            selected: false
          },
          {
            content: "tab3",
            selected: false
          },
          {
            content: "I love Apple, this is election day of 2020",
            selected: false
          }],

        showOutContent: ''
      }
    }  

    handleClick = (content) => {
      console.log(1);
      console.log('content is: ',content);
       let index = this.state.tabs.indexOf(content);
       console.log('content is: ',this.state.tabs[index]);
       //let new
      this.setState({
        ...this.state,
        showOutContent:this.state.tabs[index].content
      })
          
       
    }

    render(){
      return(
        <div>
           <ul>
             {this.state.tabs.map((tab,index) => {
               return(
                 <ol key = {index} onClick = {() => this.handleClick(tab)}>{`Tab${index+1}`}</ol>
               )
             })}
           </ul>
           <p>{this.state.showOutContent}</p>
        </div>
      );
    }
}

export default App;
