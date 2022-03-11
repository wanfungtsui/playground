import React from 'react';
import './card.css';


class Card extends React.Component {
  
	render(){
	
	return (
<div className='CardContainer'>
  <h2>  {this.props.title} </h2>
  <h1>  {this.props.icon} </h1>
  <p>  {this.props.description} </p>

    </div>

    )
}

}

export default Card