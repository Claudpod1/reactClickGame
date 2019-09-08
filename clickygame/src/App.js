import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import './App.css';
import images from './images.json';
import Scores from './components/Scores';
import Jumbotron from './components/Jumbotron';
import Images from './components/Images'

class App extends Component {
  state = {
    images,
    currentScore: 0,
    targetScore: 0,
    clickedValues: [],

  }


  // added shuffle function - recommeded from lindsay to google 

  shuffle = (arr) => {
    var i,
      j,
      temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };


  // clickCount = (id) => {

  handleClick = (id) => {

    // make a copy of the array of images 
    // shuffle the images of the copy of the array 
    const imagesCopy = [...this.state.images];
    const shuffleImages = this.shuffle(imagesCopy);
    let copyClickedValues = [...this.state.clickedValues];
    console.log(copyClickedValues);

    // if the copy of the array includes the id for the images.json the game will end 
    if (copyClickedValues.includes(id)) {
      // if(this.state.clickedValues.includes(id)){
      console.log("you clicked on this ima")
      this.gameChanger();

      // else push the id to set to the state of the score/cuurentScore 
      // make another copy of the values that were clicked
      // then have the images shuffle 
    } else {
      copyClickedValues.push(id);
      this.setState({
        currentScore: this.state.currentScore + 1,
        clickedValues: copyClickedValues,
        images: shuffleImages

      });
    }
  }

  gameChanger = () => {
    const imagesCopy = [...this.state.images];
    const shuffleImages = this.shuffle(imagesCopy);

    
    console.log(this.state.currentScore + "score")
    console.log(this.state.targetScore + "targetscore");
    // if the currentscore is less than the targetscore 
    // set the score to currentScore / the number of times the image was clicked 
    if (this.state.currentScore > this.state.targetScore) {
      this.setState({ targetScore: this.state.currentScore })

    }

    this.state.images.forEach(image => {
      image.count = 0;

    });

    this.setState({
      currentScore: 0,
      images: shuffleImages
    });
  }

  render() {
    return (
      <div className="App">
        <Scores score={this.state.currentScore}
          topScore={this.state.targetScore} />
        <Jumbotron />
        <Wrapper>
          {this.state.images.map(images => (
            <Images
              className="images"
              image={images.picture}
              name={images.name}
              id={images.id}
              key={images.id}
              handleClick= {this.handleClick}

            />

          ))}
        </Wrapper>

      </div>
    );
  }
}

export default App;
