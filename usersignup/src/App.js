import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import DisplayInfo from './components/DisplayInfo/DisplayInfo';

class App extends Component {
  constructor(props){
    super(props);
  }
  state = {
    name:"",
    email:"",
    password:"",
    display:"home"  
  }

  handleInput = event => {
    let { name, value} = event.target;
    this.setState({
        [name]:value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let newDisplay=this.state.display==='home'?'info':'home';
    this.setState({
      display:newDisplay,
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{width:"30%"}}>
          
          {this.state.display ==='home' ?
          (
          <Form name={this.state.name}
                email={this.state.email}
                password={this.state.password}
                onChange={this.handleInput}
                onClick={this.handleSubmit} />        
          ):
          (
          <DisplayInfo name={this.state.name}
                email={this.state.email}
                password={this.state.password}
                onClick={this.handleSubmit}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;
