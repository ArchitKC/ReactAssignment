import React, { Component } from 'react';
import './App.css'; 
import './Char/char.css'

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'; 
import Validation from './ValidationComponent/validationComponent';
import Char from './Char/char'


class App extends Component {

  state = {
    username : 'Archit is the hero',
    myNewValue : '0'
  };

  onClickEvent = () =>{
    this.setState({
      username : 'Why this kolaveri'
    });
  };

  inputChangedHandler =(event)=>{
    this.setState({
      username : event.target.value
    });
  }; 

  newInputChangeHandler=(event)=>{
    this.setState({myNewValue : event.target.value})
  };

  eachCharacterClick=(index)=>{
    const text = this.state.myNewValue.split('');
    text.splice(index,1);
    console.log(text);
    const updatedText = text.join('');
    console.log('Updated one : ' + updatedText);
    this.setState({myNewValue: updatedText});
    
    console.log(this.state.myNewValue);

  };

  render() {
    const charNew = this.state.myNewValue.split('').map((ch,index)=>{
      return (
        <Char 
          character = {ch}
          key ={index}
          clicked = {()=>this.eachCharacterClick(index)}>
        </Char>
    )});

    return (
      <div className="App"> 
        <button onClick={this.onClickEvent}>Click Me!</button>
        <div>

          <UserInput 
            changingText={this.inputChangedHandler}
            newNameValue={this.state.username}>              
          </UserInput>
          <UserOutput userName ={this.state.username}></UserOutput> 
          <UserOutput userName = 'Sara'></UserOutput>
          <UserOutput userName ='Archit'></UserOutput>
        </div>      

        
        <input type='text' 
          onChange = {this.newInputChangeHandler} 
          value={this.state.myNewValue}>
        </input>
        <p>{this.state.myNewValue}</p>
        <Validation inputLength={this.state.myNewValue.length}></Validation>
        {charNew}
      </div>
    );
  }
}

export default App;
