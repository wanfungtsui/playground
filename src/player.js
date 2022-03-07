import React from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

class Player extends React.Component {
  
	render(){
	
	return (

  <ShakaPlayer autoPlay src={this.props.playurl} /> );

	}
}

export default Player