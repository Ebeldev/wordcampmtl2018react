import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Card extends Component {

	render(){
		return(
			<div style={CardDiv}>
				<img src={this.props.url} width="100%" />
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}

export default Card;

const CardDiv = {
	width: '30%',
	margin: '15px',
	border: '1px solid black'
}