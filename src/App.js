import React, { Component } from 'react';
import './App.css';
import Player from './player';
import Videos from './videolist.json';
import Card from'./card'


class App extends Component {
  state = {
    uri: " "
  }

  handleClick(playurl) {
    this.setState({ uri: playurl });
  }


  render() {
    return (

      <div className="Main-section">
              <div className="Left-section">
      <Player playurl={this.state.uri} /> 
      </div>
      
        <div className='Right-section'>
          
      {Videos.videos.map((item, i) => (
      <ul key={i}>
          <div className='channel-card' onClick={() => this.handleClick(item.playurl)}>
          <Card title={item.title} description={item.description} icon={item.icon} style="background-color: '{item.color}"/>
            </div>
                  </ul>
  
  ))}
  </div>
     
          
      </div>


    );
  }

}
export default App;
