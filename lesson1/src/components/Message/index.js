import React from 'react';
import './style.css';

export class Message extends React.Component {
	render() {
		return (
			<h3 className="header" onClick={this.props.onMessageClick}>
				Hello World, {this.props.text}
			</h3>
		);
	}
}
