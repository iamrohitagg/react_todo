import React from 'react';
import logo from './logo.svg';
import './App.css'
import Todos from './Todo'
class App extends React.Component{
  render(){
    return(
      <div className = "App">
        <Todos></Todos>
      </div>
    )
  }
}

export default App;
