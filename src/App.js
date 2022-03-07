import React, { Component } from 'react';
import './App.css';
import Player from './player';
import Videos from './videolist.json'



class App extends Component {
  state = {
    uri: " "
  }

  handleClick(playurl) {
    this.setState({ uri: playurl });
  }


  render() {
    return (

      <div className="App">
      <h1>Shaka Player Demo</h1>
      <Player playurl={this.state.uri} />
  
        
      <h1>Video List</h1> 
      {Videos.videos.map((item, i) => (
      <ul key={i}>
          
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={() => this.handleClick(item.playurl)}>Play</button>
      </ul>
  
  ))}
          
      </div>


    );
  }

}
export default App;
