import React, { Component } from 'react';
import Wrapper from './components/Wrapper';

import './App.css';
import images from './images.json';
import Scores from './components/Scores';
import Jumbotron from './components/Jumbotron'
import Images from './components/Images'

class App extends Component  {
  state = {
    images,
    currentScore: 0,
    targetScore: 0,
    clickedValues:[],

  }
  render(){
    return (
      <div className="App">
      <Scores score = {this.state.currentScore} 
      topScore = {this.state.targetScore} />
      <Jumbotron />
        <Wrapper>
        {this.state.images.map(images => (
             <Images 
             className="images"
             image={images.picture}
             name={images.name}
             id={images.id}
             key={images.id}

            />

          ))}
        </Wrapper>
      
       {/* <Scores score = {this.state.currentScore} 
       topScore = {this.state.targetScore} />
       <Images 
        className="images"
        image={images.picture}
        name={images.name}
        id={images.id}
        /> */}
   
      </div>
    );
  }
}

export default App;
