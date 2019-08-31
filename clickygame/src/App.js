import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import images from './images';
import Scores from './components/Scores';
import Jumbotron from './components/Jumbotron'

class App extends Component  {
  state = {
    currentScore: 0,
    targetScore: 0,
    clickedValues:[],
    images
  }
  render(){
    return (
      <div className="App">
        <Jumbotron />
       <Scores score = {this.state.currentScore} 
       topScore = {this.state.targetScore} />
       <Images 
        className="images"
        image={images.picture}
        name={images.name}
        id={images.id}
        />
       
      </div>
    );
  }
}

export default App;
