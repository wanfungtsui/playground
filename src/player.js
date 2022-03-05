import React from 'react';
import './player.css';

const shaka = require('shaka-player/dist/shaka-player.ui.js');

//Creating class component
class Player extends React.PureComponent{

	constructor(props){

		super(props);

		//Creating reference to store video component on DOM
		this.videoComponent = React.createRef();

		//Creating reference to store video container on DOM
		this.videoContainer = React.createRef();

		//Initializing reference to error handlers
		this.onErrorEvent = this.onErrorEvent.bind(this);
		this.onError = this.onError.bind(this);
	}

	onErrorEvent(event) {
	  // Extract the shaka.util.Error object from the event.
	  this.onError(event.detail);
	}

	onError(error) {
	  // Log the error.
	  console.error('Error code', error.code, 'object', error);
	}

	componentDidMount(){

		//Link to MPEG-DASH video
		var manifestUri = 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4';

		//Getting reference to video and video container on DOM
		const video = this.videoComponent.current;
		const videoContainer = this.videoContainer.current;

		//Initialize shaka player
		var player = new shaka.Player(video);

		//Setting UI configuration JSON object
		const uiConfig = {
            'playbackRates':[0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
            'seekBarColors': {
                base: 'rgba(255, 165, 0)',
                buffered: 'rgba(255, 165, 0)',
                played: 'rgb(255, 255, 255)',
              }
        };

		//Configuring elements to be displayed on video player control panel
		  uiConfig['controlPanelElements'] = ['play_pause','loop','rewind', 'fast_forward','mute', 'volume', 'time_and_duration', 'fullscreen', 'overflow_menu' ];
          uiConfig['overflowMenuButtons'] = ['quality' ,'playback_rate'];

		//Setting up shaka player UI
      	const ui = new shaka.ui.Overlay(player, videoContainer, video);

        ui.configure(uiConfig); //configure UI
      	ui.getControls();

		// Listen for error events.
  		player.addEventListener('error', this.onErrorEvent);

  		// Try to load a manifest.
	  	// This is an asynchronous process.
	  	player.load(manifestUri).then(function() {
		    // This runs if the asynchronous load is successful.
		    console.log('The video has now been loaded!');
	  	}).catch(this.onError);  // onError is executed if the asynchronous load fails.

	}

	render(){

		/*
		Returning video with a container. Remember, when setting up shaka player with custom UI, you must
		add your video component inside a container
		The container will be used by shaka player to add your customized UI for the player
		*/
		return(
			<div className="video-container" ref={this.videoContainer}>
				<video 
					className="shaka-video"
					ref={this.videoComponent}
                    width='100%'
					poster= 'https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1920&q=80'
				/>
			</div>
		);
	}
}

export default Player;